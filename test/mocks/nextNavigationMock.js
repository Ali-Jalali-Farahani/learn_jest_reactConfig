// test/mocks/next-navigation.js
const useRouter = jest.fn();
const usePathname = jest.fn();
const useSearchParams = jest.fn();
const useParams = jest.fn();

useRouter.mockImplementation(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn(),
}));

usePathname.mockImplementation(() => '/deposit');
useSearchParams.mockImplementation(() => new URLSearchParams());
useParams.mockImplementation(() => ({}));

module.exports = {
    useRouter,
    usePathname,
    useSearchParams,
    useParams,
};