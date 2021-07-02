type DeleteAction = () => void;

export class DeleteData {
  constructor(
    public title: string,
    public elementName: string,
    public elementValue: string,
    ) { }
}
