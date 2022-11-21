export interface Props {
  name: string;
}

export default function Hello({ name }: Props) {
  return <div class="bg-primary text-black">Hello {name}</div>;
}
