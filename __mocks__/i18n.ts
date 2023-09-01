// __mocks__/i18n.ts
export const initReactI18next = { type: "3rdParty", init: jest.fn() };

export const useTranslation = () => {
  return { t: (key: string) => key, i18n: {} };
};
