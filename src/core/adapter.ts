export interface Adapter<TModel, TParam> {
    adapt(item: TParam): TModel;
}
