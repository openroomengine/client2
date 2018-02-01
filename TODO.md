# Todo
## Currently
- wire up login form
- (login) redirect (after action): link to special location `next` (gets path from store, can be set)
- sessions
  - detect presence of login cookie → assume logged in ↔ default: assume logged out

## rules
- styles below component definition
- Components that start with `Styled*` received additional styles in current document
- put render always as last method (you know it is there) (see specific methods of component first)

## Long term
- consider preprocessing graphql queries (info: https://github.com/apollographql/graphql-tag)
- remove bootstrap, add normalization in root style

## Apollo notes
- `options: {errorPolicy: all}` → error prop in case of graphql error

## Access control flow
- no right to view page
  - visitor: show login page
  - rest: show message access not allowed
