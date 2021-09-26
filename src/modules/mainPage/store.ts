import { atom, selector } from 'recoil';

import { IArticle } from 'response';
import { todaysPicks, employeeBranding } from 'mocks/articles';

type CurrentViewState = 'forYou' | 'bookmarks';

export const currentViewState = atom<CurrentViewState>({
  key: 'currentViewState',
  default: 'forYou',
});

export const todaysPicksState = atom<IArticle[]>({
  key: 'todaysPicksState',
  default: todaysPicks,
});

export const employeeBrandingState = atom<IArticle[]>({
  key: 'employeeBrandingState',
  default: employeeBranding,
});

export const bookmarksState = atom<IArticle[]>({
  key: 'bookmarksState',
  default: [],
});

export const bookmarkedIdsState = selector({
  key: 'bookmarkedIdsState',
  get: ({ get }) => {
    return get(bookmarksState).map((bookmark) => bookmark.id);
  },
});
