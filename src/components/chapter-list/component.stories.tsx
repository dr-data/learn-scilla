import * as React from 'react';
import { storiesOf } from '@storybook/react';
import intructionsLocalized from '../../locales/instructions/en/index';
import { MemoryRouter } from 'react-router';
import ChapterList from '.';

const t = (s: string) => s;
const navigate = (chapterNum, lessonNum) => console.log('navigate', chapterNum, lessonNum);

const baseComponent = (props) => (
  <ChapterList
    ch1Progress={props.ch1Progress}
    chapterList={intructionsLocalized}
    isAuth={props.isAuth}
    progress={props.progress}
    navigate={navigate}
    t={t}
  />
);

storiesOf('component.ChapterList', module)
  .addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
  .add('auth: false (local storage)', () =>
    baseComponent({
      isAuth: false,
      ch1Progress: 1,
      progress: undefined
    })
  )
  .add('auth: true (firestore)', () =>
    baseComponent({
      isAuth: true,
      ch1Progress: 1,
      progress: { chapter1: 3 }
    })
  );
