// test/mocks/bprogress-next.js
const useRouter = jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn(),
}));

const usePathname = jest.fn(() => '/');
const useSearchParams = jest.fn(() => new URLSearchParams());
const useParams = jest.fn(() => ({}));

// اگر exportهای دیگری از @bprogress/next استفاده می‌کنید، اینجا اضافه کنید
const useNavigation = jest.fn();
const useServerInsertedHTML = jest.fn();

module.exports = {
    useRouter,
    usePathname,
    useSearchParams,
    useParams,
    useNavigation,
    useServerInsertedHTML,
    // سایر exportهای مورد نیاز
};