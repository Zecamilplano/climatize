import { Header } from "./header";

export function HeaderAbout() {
  return (
    <Header.container >
      <Header.image />
      <Header.centerContent />
      <Header.content contentType="about" />
    </Header.container>
  )
}
