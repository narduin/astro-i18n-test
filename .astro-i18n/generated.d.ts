type DefaultLangCode = "fr"
type SupportedLangCode = "en" | "it"
type LangCode = "fr" | "en" | "it"
type RouteUri = | "/" 
type RouteParams = {"/": undefined; }
type TranslationPath = "index.title" | "index.currentLocale"
type TranslationOptions = { "index.title": {} | undefined; "index.currentLocale": {} | undefined; }

declare module "astro-i18n" {
	export * from "astro-i18n/"
	
	export function l<Uri extends RouteUri>(
		route: Uri | string & {},
		...args: undefined extends RouteParams[Uri]
			? [params?: RouteParams[Uri], targetLangCode?: LangCode, routeLangCode?: LangCode]
			: [params: RouteParams[Uri], targetLangCode?: LangCode, routeLangCode?: LangCode]
	): string
	
	export function t<Path extends TranslationPath>(
		path: Path,
		...args: undefined extends TranslationOptions[Path]
			? [options?: TranslationOptions[Path], langCode?: LangCode]
			: [options: TranslationOptions[Path], langCode?: LangCode]
	): string
	
	type Translation = string | { [translationKey: string]: string | Translation }
	type Translations = { [langCode: string]: Record<string, Translation> }
	type RouteTranslations = { [langCode: string]: Record<string, string> }
	type InterpolationFormatter = (value: unknown, ...args: unknown[]) => string
	class AstroI18n {
		defaultLangCode: DefaultLangCode
		supportedLangCodes: SupportedLangCode[]
		showDefaultLangCode: boolean
		translations: Translations
		routeTranslations: RouteTranslations
		get langCodes(): LangCode[]
		get langCode(): LangCode
		set langCode(langCode: LangCode)
		get formatters(): Record<string, InterpolationFormatter>
		getFormatter(name: string): InterpolationFormatter | undefined
		setFormatter(name: string, formatter: InterpolationFormatter): void
		deleteFormatter(name: string): void
	}
	export const astroI18n: AstroI18n
}
