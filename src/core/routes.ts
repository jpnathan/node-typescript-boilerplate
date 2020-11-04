import resouceExampleRoutes from './resouce.folder/resouce.routes';

export default (): Record<string, unknown> => {
    return {
        resouceExampleRoutes: () => {
            return resouceExampleRoutes
        }
    };
};