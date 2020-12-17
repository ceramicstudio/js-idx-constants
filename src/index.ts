type PublishedRecord<K extends string> = Record<K, string>

export type ImageMetadata = {
  src: string
  mimeType: string
  width: number
  height: number
  size?: number
}

export type ImageSources = {
  original: ImageMetadata
  alternatives?: Array<ImageMetadata>
}

export type BasicProfile = {
  name?: string
  image?: ImageSources
  description?: string
  emoji?: string
  background?: ImageSources
  birthDate?: string
  url?: string
  gender?: string
  homeLocation?: string
  residenceCountry?: string
  nationalities?: Array<string>
  affiliations?: Array<string>
}

export type CryptoAccounts = Record<string, string>

export type Definition<C extends Record<string, any> = Record<string, any>> = {
  name: string
  description: string
  schema: string
  url?: string
  family?: string
  config?: C
}

export type IdentityIndex = Record<string, string>

export type JWERecipient = {
  header: Record<string, any>
  encrypted_key: string
}

export type JWE = {
  protected: string
  iv: string
  ciphertext: string
  tag: string
  aad?: string
  recipients?: Array<JWERecipient>
}

export type WrappedJWE = { jwe: JWE }

export type AuthData = {
  id: WrappedJWE
  pub: string
  data: WrappedJWE
}

export type ThreeIdKeychain = {
  authMap: Record<string, AuthData>
  pastSeeds: Array<JWE>
}

export type SchemaTypes = {
  BasicProfile: BasicProfile
  CryptoAccounts: CryptoAccounts
  Definition: Definition
  IdentityIndex: IdentityIndex
  ThreeIdKeychain: ThreeIdKeychain
}
export type SchemaName = keyof SchemaTypes
export type SchemaType<K extends SchemaName> = SchemaTypes[K]
export type PublishedSchemas = PublishedRecord<SchemaName>

export const schemas: PublishedSchemas = {
  BasicProfile: 'ceramic://k3y52l7qbv1frxjdr9qpn9ldvbxb0jg4eig7wtjkdu6gk84vyazw9j4txf4o6d2io',
  CryptoAccounts: 'ceramic://k3y52l7qbv1fry6z45y9s2w5npe0nyokbp0oiv1tdhvswhv07lb2v13zdz4i1bp4w',
  Definition: 'ceramic://k3y52l7qbv1frxhudkas7hj2z9l45y3w1nhejmj7ykoyrlukqwd160233l7qupp8g',
  IdentityIndex: 'ceramic://k3y52l7qbv1frxrcmx299lbnc5txfo4b7tls1rm5vf7luc34yuztc60tibruptp8g',
  ThreeIdKeychain: 'ceramic://k3y52l7qbv1fry69sodu0hc4nwvzglaxxvy3l0xdw7v1o36gyu2dl9us472qh8veo'
}

export type DefinitionTypes = {
  basicProfile: BasicProfile
  cryptoAccounts: CryptoAccounts
  threeIdKeychain: ThreeIdKeychain
}
export type DefinitionName = keyof DefinitionTypes
export type DefinitionType<K extends DefinitionName> = DefinitionTypes[K]
export type PublishedDefinitions = PublishedRecord<DefinitionName>

export const definitions: PublishedDefinitions = {
  basicProfile: 'kjzl6cwe1jw14bdsytwychcd91fcc7xibfj8bc0r2h3w5wm8t6rt4dtlrotl1ou',
  cryptoAccounts: 'kjzl6cwe1jw1490kh2uqjxafo4xy0oxtufuiscvplhoo8fqz3uonm1cwnfw0x5j',
  threeIdKeychain: 'kjzl6cwe1jw148786wkzw43y8jdqw3maliueon9regm5zp8hxh4gpk2gjg4dtyz'
}
