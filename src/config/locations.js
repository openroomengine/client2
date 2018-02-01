import pathRegex from 'path-to-regexp'
import createHistory from 'history/createBrowserHistory'
import isAuth from '../helpers/isAuth.js'
import camelCase from '../helpers/camelCase.js'

// definitions
const locations = [
  {
    pattern: '/',
    redirect: '/dashboard',
  },
  {
    pattern: '/login',
    page: 'login',
    sidebar: false,
  },
  {
    pattern: '/dashboard',
    page: 'dashboard',
  },
  {
    pattern: '/rooms',
    page: 'rooms',
  },
  {
    pattern: '/rooms/:room',
    page: 'room',
  },
]

const locationNotFound = {
  error: true,
}

// parse locations
const parseLocation = (loc) => {
  let keys = []

  return {
    pattern: loc.path || null,
    redirect: loc.redirect || null,
    regex: loc.pattern ? pathRegex(loc.pattern, keys) : null,
    keys: keys.length ? keys : null,
    resolve: loc.pattern ? pathRegex.compile(loc.pattern) : null,
    page: loc.page,
    sidebar: loc.sidebar !== false, // undefined, true → true
    error: !!loc.error,
  }
}

const parsedLocations = locations.map((loc) => parseLocation(loc))
const parsedLocationNotFound = parseLocation(locationNotFound)

// get location
const getLocation = (path) => {
  // find location
  for (const location of parsedLocations) {
    if (location.regex.test(path)) {
      return {
        ...location,
        path,
      }
    }
  }

  // 404
  return null
}

const getNotFound = (path) => ({
  ...parsedLocationNotFound,
  path,
})

// resolve (get location, following redirects)
// input → store
const resolve = (path, user) => {
  const location = getLocation(path)

  // location not found
  if (!location) return getNotFound(path)

  // redirect
  else if (location.redirect) return resolve(location.redirect, user)

  // redirect to login (visitor (role) insufficient permissions)
  else if (
    user.role === 'visitor' &&
    !isAuth(camelCase('page', location.page), user)
  ) return getLocation('/login')

  // final location, sufficient permissions
  else return location
}

export {
  parseLocation,
  getLocation,
  resolve,
  parsedLocations as locations,
  parsedLocationNotFound as locationNotFound,
}

export const history = createHistory()
