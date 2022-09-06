class FeatureFlag {
  static readonly LIGHT_THEME = new FeatureFlag(
    "Light Theme",
    false,
    "Enable "
  );
  static readonly BLOG = new FeatureFlag(
    "Blog",
    false,
    "Enable the Blog pages for the website."
  );

  constructor(
    readonly name: string,
    readonly defaultValue: Boolean,
    readonly description?: string
  ) {}

  toString() {
    return this.name;
  }
}

export default FeatureFlag;
