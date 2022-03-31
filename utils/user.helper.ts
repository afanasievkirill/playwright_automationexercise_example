import { faker } from '@faker-js/faker';
import { UserModel } from '../model/user.interface';

const createUser = (): UserModel => {
	const name = faker.name.findName();
	const lastName = faker.name.lastName();
	const email = faker.internet.email();
	const companyName = faker.company.companyName();
	const firstAdress = faker.address.streetAddress();
	const secondAdress = faker.address.streetAddress();
	const state = faker.address.state();
	const city = faker.address.city();
	const zip = faker.address.zipCode();
	const phone = faker.phone.phoneNumber();
	const userData: UserModel = {
		name,
		lastName,
		email,
		companyName,
		firstAdress,
		secondAdress,
		state,
		city,
		zip,
		phone,
	};
	return userData;
};

export { createUser };
