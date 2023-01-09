import type { PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';

export const load: PageServerLoad = async () => {
	const prisma = new PrismaClient();
	const tasks = await prisma.task.findMany();

	return {
		message: 'success',
		result: tasks
	};
};
