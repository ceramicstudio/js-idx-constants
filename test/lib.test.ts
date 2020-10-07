import { publishedDefinitions, publishedSchemas } from '@ceramicstudio/idx-tools'

import { definitions, schemas } from '..'

describe('lib', () => {
  test('definitions', () => {
    expect(definitions).toEqual(publishedDefinitions)
  })

  test('schemas', () => {
    expect(schemas).toEqual(publishedSchemas)
  })
})
