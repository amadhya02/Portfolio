import theme from './theme';

test('uses the portfolio design system', () => {
  expect(theme.palette.mode).toBe('dark');
  expect(theme.palette.primary.main).toBe('#FF9811');
  expect(theme.typography.h1.fontFamily).toContain('Space Grotesk');
});
