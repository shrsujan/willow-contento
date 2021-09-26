import { IArticle } from 'response';

import article1 from 'assets/images/article_1.png';
import article2 from 'assets/images/article_2.png';
import article3 from 'assets/images/article_3.png';
import forbes from 'assets/thirdPartyLogos/forbes.png';
import zendesk from 'assets/thirdPartyLogos/zendesk.png';
import bbcFuture from 'assets/thirdPartyLogos/bbc_future.png';

export const todaysPicks: IArticle[] = [
  {
    id: '123',
    favicon: forbes,
    image: article1,
    sourceTitle: 'Forbes',
    title:
      '6 ways to achieve ‘wow’ customer service and create lifelong customers',
    description:
      '7h ago · All humans, including the humans we call "customers," tend to remember what happens',
    url: '',
    domain: 'https://www.forbes.com/',
  },
  {
    id: '234',
    favicon: bbcFuture,
    image: article2,
    sourceTitle: 'BBC Future',
    title: 'How do organizations spread and use analytic knowledge?',
    description:
      '7h ago · There are many ways to achieve great analytic cultures, but all great analytic cultures share some common elements. The best',
    url: '',
    domain: 'https://www.bbc.com/future/',
  },
  {
    id: '345',
    favicon: zendesk,
    image: article3,
    sourceTitle: 'Zendesk',
    title: 'The benefits of knowledge management for your service desk',
    description:
      '7h ago · Getting knowledge management right has never been easy. You know that in the long run, recording the knowledge of your service desk',
    url: '',
    domain: 'https://www.zendesk.com/',
  },
  {
    id: '456',
    favicon: forbes,
    image: article1,
    sourceTitle: 'Forbes',
    title:
      '20 ways to achieve ‘wow’ customer service and create lifelong customers',
    description:
      '7h ago · All humans, including the humans we call "customers," tend to remember what happens',
    url: '',
    domain: 'https://www.forbes.com/',
  },
  {
    id: '567',
    favicon: bbcFuture,
    image: article2,
    sourceTitle: 'BBC Future',
    title: 'Why do organizations spread and use analytic knowledge?',
    description:
      '7h ago · There are many ways to achieve great analytic cultures, but all great analytic cultures share some common elements. The best',
    url: '',
    domain: 'https://www.bbc.com/future/',
  },
  {
    id: '678',
    favicon: zendesk,
    image: article3,
    sourceTitle: 'Zendesk',
    title: 'The importance of knowledge management for your service desk',
    description:
      '7h ago · Getting knowledge management right has never been easy. You know that in the long run, recording the knowledge of your service desk',
    url: '',
    domain: 'https://www.zendesk.com/',
  },
];

export const employeeBranding: IArticle[] = todaysPicks.slice(0, 3);
