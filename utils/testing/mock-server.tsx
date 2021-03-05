import { setupServer, SetupServerApi } from 'msw/node';
import { rest } from 'msw';


export function createMockServer(url: string, mockResData: any, errStatus: number=0): SetupServerApi {
    return setupServer(
        rest.get(url, (_req, res, ctx) => {
            if (errStatus) return res(ctx.status(errStatus));
            return res(ctx.json(mockResData));
        })
    );
}

export function killMockServer(server: SetupServerApi): void {
    server.resetHandlers();
    server.close();
}
