import type { PageServerLoad } from './$types';
import { PrismaClient, type Board, type Status, type Task } from '@prisma/client';
import type { ResponseOne } from 'src/types/response';

export const load: PageServerLoad = async (): Promise<
	ResponseOne<(Board & { tasks: Task[]; statuses: Status[] }) | null>
> => {
	const prisma = new PrismaClient();
	const board = await prisma.board.findFirst();
	const tasks = await prisma.task.findMany({ where: { boardId: board?.id } });
	const statuses = await prisma.status.findMany({ where: { boardId: board?.id } });

	return {
		message: 'success',
		result: board
			? {
					...board,
					tasks: tasks,
					statuses: statuses
			  }
			: null
	};
};
