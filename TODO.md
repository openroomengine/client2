# Todo
## Currently
- (login) redirect (after action): link to special location `next` (gets path from store, can be set)
- sessions
  - detect presence of login cookie → assume logged in ↔ default: assume logged out
- access control

## Long term
- consider preprocessing graphql queries (info: https://github.com/apollographql/graphql-tag)

## Apollo notes
- `options: {errorPolicy: all}` → error prop in case of graphql error

## Access control flow
- no right to view page
  - visitor: show login page
  - rest: show message access not allowed
