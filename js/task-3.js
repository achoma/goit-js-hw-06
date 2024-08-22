class User {
  // Nieobowiązkowa deklaracja publicznych właściwości
  name;
  // Obowiązkowa deklaracja prywatnych właściwości
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }
}
