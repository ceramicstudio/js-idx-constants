import { definitions, schemas } from '..'

describe('lib', () => {
  const DocID = expect.stringMatching(/^ceramic:\/\/[0-9a-z]+$/)

  test('definitions', () => {
    expect(definitions).toEqual({
      basicProfile: DocID,
      cryptoAccountLinks: DocID
    })
  })

  test('schemas', () => {
    expect(schemas).toEqual({
      BasicProfile: DocID,
      CryptoAccountLinks: DocID,
      Definition: DocID,
      IdentityIndex: DocID
    })
  })
})
