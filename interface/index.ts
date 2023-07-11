export interface ResponsePriceChange {
  code:    string;
  message: string;
  payload: PayloadPriceChange[];
}

export interface PayloadPriceChange {
  pair:        string;
  latestPrice: string;
  day:         string;
  week:        string;
  month:       string;
  year:        string;
}

export interface ResponseSupportedCurrencies {
  code:    string;
  message: string;
  payload: PayloadSupportedCurrencies[];
}

export interface PayloadSupportedCurrencies {
  currencyGroup:  string;
  color:          string;
  currencySymbol: string;
  name:           string;
  logo:           string;
  decimal_point:  number;
  listingDate:    Date;
  wallets:        Wallet[];
}

export interface Wallet {
  currencyGroup:  string;
  tokenSymbol:    string;
  decimal_point:  number;
  tokenType:      string;
  blockchain:     string;
  explorer:       string;
  listingDate:    Date;
  blockchainName: string;
  logo:           string;
}

export interface ResponseTags {
  id:               number;
  title:            string;
  subtitle:         string;
  language:         Language;
  url:              null;
  published_at:     Date;
  created_at:       Date;
  updated_at:       Date;
  statusbar:        Statusbar;
  order:            number;
  slug:             string;
  meta_title:       null | string;
  meta_description: null | string;
  icon:             Icon;
  image:            Icon;
  currencies:       Language[];
}

export interface Language {
  id:         number;
  name:       string;
  created_at: Date;
  updated_at: Date;
}

export interface Icon {
  id:                number;
  name:              string;
  hash:              string;
  sha256:            null;
  ext:               EXT;
  mime:              MIME;
  size:              number;
  url:               string;
  provider:          Provider;
  provider_metadata: null;
  created_at:        Date;
  updated_at:        Date;
  alternativeText:   string;
  caption:           string;
  width:             number;
  height:            number;
  formats:           Formats | null;
  previewUrl:        null;
}

export enum EXT {
  PNG = ".png",
  SVG = ".svg",
}

export interface Formats {
  small:     Small;
  thumbnail: Small;
}

export interface Small {
  ext:    EXT;
  url:    string;
  hash:   string;
  mime:   MIME;
  name:   string;
  path:   null;
  size:   number;
  width:  number;
  height: number;
}

export enum MIME {
  ImagePNG = "image/png",
  ImageSVGXML = "image/svg+xml",
}

export enum Provider {
  AwsS3 = "aws-s3",
}

export enum Statusbar {
  Dark = "dark",
  Light = "light",
}

export type TypeSort = "asc" | "desc"

export interface IFilter {
  tag: string,
  search: string,
  sort: Array<string | TypeSort>
}