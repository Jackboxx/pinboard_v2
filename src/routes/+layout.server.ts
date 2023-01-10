import { PrismaClient, type User } from '@prisma/client';
import type { ResponseOne } from 'src/types/response';
import type { PageServerLoad } from './auth/$types';

export const load: PageServerLoad = async (event): Promise<ResponseOne<User | null>> => {
	const prisma = new PrismaClient();
	const id = Number.parseInt(event.cookies.get('userId') ?? '-1');
	const user = await prisma.user.findUnique({ where: { id: id } });

	return {
		message: 'success',
		result: user
	};
};
