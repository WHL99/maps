import { faker } from '@faker-js/faker'
import { Mappable } from './CustomMap'

//可以不用implements Mappable
//但這樣寫可以幫助其他人了解以及除錯
export class Company implements Mappable {
  name: string
  catchPrase: string
  location: {
    lat: number
    lng: number
  }
  constructor() {
    this.name = faker.company.name()
    this.catchPrase = faker.company.catchPhrase()
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    }
  }
  markerContent() {
    return `
    <h2>Company Name: ${this.name}</h2>
    <p>Company Catch Prase: ${this.catchPrase}</p>
    `
  }
}
