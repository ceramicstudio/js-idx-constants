type PublishedRecord<K extends string> = Record<K, string>

export type IDXDefinitionName = 'basicProfile' | 'cryptoAccounts' | 'threeIdKeychain'
export type IDXPublishedDefinitions = PublishedRecord<IDXDefinitionName>

export type IDXSchemaName =
  | 'BasicProfile'
  | 'CryptoAccounts'
  | 'Definition'
  | 'IdentityIndex'
  | 'ThreeIdKeychain'
export type IDXPublishedSchemas = PublishedRecord<IDXSchemaName>

export const definitions: IDXPublishedDefinitions = {
  basicProfile: 'kjzl6cwe1jw148f9c50cwrirkyvr5biw3qhkvnbq3u1u461695btvw7eb8hce88',
  cryptoAccounts: 'kjzl6cwe1jw1490kh2uqjxafo4xy0oxtufuiscvplhoo8fqz3uonm1cwnfw0x5j',
  threeIdKeychain: 'kjzl6cwe1jw145bf11kxl53d44cku4kxmycfgni4s3t9nnu2k9yx89h31y979o3'
}

export const schemas: IDXPublishedSchemas = {
  BasicProfile: 'ceramic://k3y52l7qbv1frygu0pp6pl6xzhs82oi61jflzh1jleootigaj8urmjtbn51hcm800',
  CryptoAccounts: 'ceramic://k3y52l7qbv1fry6z45y9s2w5npe0nyokbp0oiv1tdhvswhv07lb2v13zdz4i1bp4w',
  Definition: 'ceramic://k3y52l7qbv1frxhudkas7hj2z9l45y3w1nhejmj7ykoyrlukqwd160233l7qupp8g',
  IdentityIndex: 'ceramic://k3y52l7qbv1frxrcmx299lbnc5txfo4b7tls1rm5vf7luc34yuztc60tibruptp8g',
  ThreeIdKeychain: 'ceramic://k3y52l7qbv1fry9hyxri5xfy3sx7izbxv66h8u5r53dbzplj9h3jm88fnrpa1qd4w'
}
