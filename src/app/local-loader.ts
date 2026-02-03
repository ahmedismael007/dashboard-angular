import { loadTranslations } from '@angular/localize';

export async function loadLocaleFiles(locale: string) {
  try {
    const manifestRes = await fetch(`/locale/manifest.json`);
    if (!manifestRes.ok) throw new Error('Manifest not found');

    const files: string[] = await manifestRes.json();

    const translations = await Promise.all(
      files.map(async (file) => {
        const res = await fetch(`/locale/${locale}/${file}.json`);
        if (!res.ok) return {};
        try {
          return await res.json();
        } catch {
          console.warn(`${file}.json is empty or invalid`);
          return {};
        }
      }),
    );

    loadTranslations(Object.assign({}, ...translations));
  } catch (err) {
    console.error('Error loading locale files:', err);
  }
}
