export type Sock = {
  id: number,
  name: string,
  brand: string,
  variant: string,
  color: string,
  price: number,
  inventory: number
};

export type Review = {
  socksId: number,
  email: string,
  rating: number,
  text: string,
  added: string,
}
