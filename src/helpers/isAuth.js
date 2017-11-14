import roles from '../config/roles.js'

// is authorized?
// NOTE: Do not use the same permissions with different limitations on the same role.
//       Only the first ocurrence of a permission is taken into account, unexpected behavior may arise. See (1).
export default (rules, user, subject) => {
  const {role, id: actor} = user

  // normalize rules
  if (typeof rules === 'string') rules = [rules]

  // granted permissions
  const grants = roles[role]

  // make sure role exists
  if (!grants) throw new Error(`Role "${role}" does not exist.`)

  // verify every rule
  for (const rule of rules) {
    // find grant with first part that matches rule
    const grant = grants
      .find(grant => grant.split(':')[0] === rule) // (1)

    // unauthorized (permission lacking entirely)
    if (!grant) return false

    const limitation = grant.split(':')[1]

    // unauthorized (not owning resource)
    if (
      limitation === 'own' &&
      (!actor || !subject || actor !== subject)
    ) return false
  }

  // authorized
  return true
}
