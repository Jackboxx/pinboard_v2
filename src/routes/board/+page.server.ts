import type { PageServerLoad } from './$types';
import { PrismaClient, type Task } from '@prisma/client';
import type { ResponseMany } from 'src/types/response';

export const load: PageServerLoad = async (): Promise<ResponseMany<Task>> => {
	const prisma = new PrismaClient();
	const tasks = await prisma.task.findMany();

	return {
		message: 'success',
		result: tasks
	};
};
