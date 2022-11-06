// The reason we do this is that in this way we get to keep the queryClient object as a global context

import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default queryClient;