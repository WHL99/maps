import { faker } from '@faker-js/faker'
import { Mappable } from './CustomMap'
export class User implements Mappable {
  name: string
  location: {
    lat: number
    lng: number
  }
  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    }
  }
  markerContent() {
    return `<h2>User Name: ${this.name}</h1>`
  }
}
