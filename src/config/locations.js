import pathRegex from 'path-to-regexp'
import createHistory from 'history/createBrowserHistory'

// definitions
const locations = [
  {
    pattern: '/',
    redirect: '/dashboard',
  },
  {
    label: 'login',
    pattern: '/login',
  },
  {
    label: 'dashboard',
    pattern: '/dashboard',
  },
  {
    label: 'rooms',
    pattern: '/rooms',
  },
  {
    label: 'room',
    pattern: '/rooms/:room',
  },
]

const locationNotFound = {
  label: 'locationNotFound',
  error: true,
}

// parse locations
const parseLocation = (loc) => {
  let keys = []

  return {
    label: loc.label || null,
    pattern: loc.path || null,
    redirect: loc.redirect || null,
    regex: loc.pattern ? pathRegex(loc.pattern, keys) : null,
    keys: keys.length ? keys : null,
    resolve: loc.pattern ? pathRegex.compile(loc.pattern) : null,
    page: loc.page || loc.label,
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
  return {
    ...parsedLocationNotFound,
    path,
  }
}

// resolve (get location, following redirects)
const resolve = (path) => {
  const location = getLocation(path)

  return location.redirect ? resolve(location.redirect) : location
}

export {
  parseLocation,
  getLocation,
  resolve,
  parsedLocations as locations,
  parsedLocationNotFound as locationNotFound,
}

export const history = createHistory()
