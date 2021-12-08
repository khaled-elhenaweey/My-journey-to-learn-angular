export class Recipe {
  public name: string | undefined;
  public description: string | undefined;
  public imgPath: string | undefined;
  constructor(name: string, description: string, imgPath: string) {
    this.name = name;
    this.description = description;
    this.imgPath = imgPath;
  }
}
