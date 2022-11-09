import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '../styles/components/switch.component';

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme, theme } = useTheme();

  const isChecked = theme === 'dark';

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleThemeSwitch = () => {
    const theme = resolvedTheme === 'light' ? 'dark' : 'light';

    setTheme(theme);
  };

  return (
    <Switch.Root onClick={handleThemeSwitch} checked={isChecked}>
      <Switch.SunIcon size={22} weight="bold" />
      <Switch.Thumb />
      <Switch.MoonIcon size={24} weight="bold" />
    </Switch.Root>
  );
};
