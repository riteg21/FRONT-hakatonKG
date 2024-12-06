import { memo } from "react";
import type { FC } from "react";

import resets from "../_resets.module.scss";
import classes from "./ListTasks.module.scss";

interface Props {
  className?: string;
}
/* @figmaId 28:2 */
export const ListTasks: FC<Props> = memo(function ListTasks(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.appBar}>
        <div className={classes.appBar__logo}>
          <div className={classes.appBar__logo__miniLogo}>
            <div className={classes.appBar__logo__miniLogo__if}>if</div>
          </div>
          <div className={classes.appBar__logo__itFreelancer}>ItFreelancer</div>
        </div>
        <div className={classes.appBar__rightMenu}>
          <div className={classes.appBar__rightMenu__fastMenu}>
            <div className={classes.appBar__rightMenu__fastMenu__frame3}>
              <div
                className={classes.appBar__rightMenu__fastMenu__frame3__unnamed}
              >
                Заказчику
              </div>
              <div
                className={classes.appBar__rightMenu__fastMenu__frame3___1}
              ></div>
            </div>
            <div className={classes.appBar__rightMenu__fastMenu__frame4}>
              <div
                className={
                  classes.appBar__rightMenu__fastMenu__frame4__unnamed2
                }
              >
                Исполнителю
              </div>
              <div
                className={classes.appBar__rightMenu__fastMenu__frame4___12}
              ></div>
            </div>
          </div>
          <div className={classes.appBar__rightMenu__signIn}>
            <div className={classes.appBar__rightMenu__signIn__unnamed3}>
              Войти
            </div>
          </div>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.content__tasks}>
          <div className={classes.content__tasks__appTask}>
            <div className={classes.content__tasks__appTask__unnamed4}>
              Заказы
            </div>
            <div className={classes.content__tasks__appTask__sort}>
              <div className={classes.content__tasks__appTask__sort__unnamed5}>
                Сортировка:
              </div>
              <button className={classes.content__tasks__appTask__sort__button}>
                <div
                  className={
                    classes.content__tasks__appTask__sort__button__unnamed6
                  }
                >
                  <p
                    className={
                      classes.content__tasks__appTask__sort__button__unnamed6__labelWrapper
                    }
                  >
                    По дате убывания
                  </p>
                </div>
              </button>
            </div>
          </div>
          <div className={classes.content__tasks__task}>
            <div className={classes.content__tasks__task__top}>
              <div className={classes.content__tasks__task__top__topLeft}>
                <div
                  className={classes.content__tasks__task__top__topLeft__info}
                >
                  <div
                    className={
                      classes.content__tasks__task__top__topLeft__info__unnamed7
                    }
                  >
                    Какое-то очень долгое описание для очень нужной задачи
                    которую необходимо выполнить
                  </div>
                  <div
                    className={
                      classes.content__tasks__task__top__topLeft__info__unnamed8
                    }
                  >
                    ООО Какая-то компании
                  </div>
                </div>
                <div
                  className={classes.content__tasks__task__top__topLeft__price}
                >
                  <div
                    className={
                      classes.content__tasks__task__top__topLeft__price__images1
                    }
                  ></div>
                  <div
                    className={
                      classes.content__tasks__task__top__topLeft__price__value
                    }
                  >
                    <div
                      className={
                        classes.content__tasks__task__top__topLeft__price__value___100
                      }
                    >
                      <div
                        className={
                          classes.content__tasks__task__top__topLeft__price__value___100__textBlock
                        }
                      >
                        1 000 руб.
                      </div>
                      <div
                        className={
                          classes.content__tasks__task__top__topLeft__price__value___100__textBlock2
                        }
                      >
                        <p
                          className={
                            classes.content__tasks__task__top__topLeft__price__value___100__textBlock2__labelWrapper2
                          }
                        >
                          <span
                            className={
                              classes.content__tasks__task__top__topLeft__price__value___100__textBlock2__labelWrapper2__label
                            }
                          >
                            за час
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.content__tasks__task__tags}>
              <div className={classes.content__tasks__task__tags__tag}>
                <div className={classes.content__tasks__task__tags__tag__tag1}>
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task__tags__tag2}>
                <div
                  className={classes.content__tasks__task__tags__tag2__tag12}
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task__tags__tag3}>
                <div
                  className={classes.content__tasks__task__tags__tag3__tag13}
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task__tags__tag4}>
                <div
                  className={classes.content__tasks__task__tags__tag4__tag14}
                >
                  tag1
                </div>
              </div>
            </div>
            <div className={classes.content__tasks__task__bot}>
              <div className={classes.content__tasks__task__bot__bottomLeft}>
                <div
                  className={
                    classes.content__tasks__task__bot__bottomLeft___1002
                  }
                >
                  <p
                    className={
                      classes.content__tasks__task__bot__bottomLeft___1002__labelWrapper3
                    }
                  >
                    <span
                      className={
                        classes.content__tasks__task__bot__bottomLeft___1002__labelWrapper3__label2
                      }
                    >
                      100
                    </span>
                    <span
                      className={
                        classes.content__tasks__task__bot__bottomLeft___1002__labelWrapper3__label3
                      }
                    >
                      {" "}
                      просмотров
                    </span>
                  </p>
                </div>
                <div
                  className={
                    classes.content__tasks__task__bot__bottomLeft___1003
                  }
                >
                  <p
                    className={
                      classes.content__tasks__task__bot__bottomLeft___1003__labelWrapper4
                    }
                  >
                    <span
                      className={
                        classes.content__tasks__task__bot__bottomLeft___1003__labelWrapper4__label4
                      }
                    >
                      100
                    </span>
                    <span
                      className={
                        classes.content__tasks__task__bot__bottomLeft___1003__labelWrapper4__label5
                      }
                    >
                      {" "}
                      откликов
                    </span>
                  </p>
                </div>
              </div>
              <div className={classes.content__tasks__task__bot__frame47}>
                <div
                  className={classes.content__tasks__task__bot__frame47___110}
                >
                  11:00
                </div>
                <div
                  className={
                    classes.content__tasks__task__bot__frame47___23122024
                  }
                >
                  23.12.2024
                </div>
              </div>
            </div>
          </div>
          <div className={classes.content__tasks__task2}>
            <div className={classes.content__tasks__task2__top2}>
              <div className={classes.content__tasks__task2__top2__topLeft2}>
                <div
                  className={
                    classes.content__tasks__task2__top2__topLeft2__info2
                  }
                >
                  <div
                    className={
                      classes.content__tasks__task2__top2__topLeft2__info2__unnamed9
                    }
                  >
                    Какое-то очень долгое описание для очень нужной задачи
                    которую необходимо выполнить
                  </div>
                  <div
                    className={
                      classes.content__tasks__task2__top2__topLeft2__info2__unnamed10
                    }
                  >
                    ООО Какая-то компании
                  </div>
                </div>
                <div
                  className={
                    classes.content__tasks__task2__top2__topLeft2__price2
                  }
                >
                  <div
                    className={
                      classes.content__tasks__task2__top2__topLeft2__price2__images12
                    }
                  ></div>
                  <div
                    className={
                      classes.content__tasks__task2__top2__topLeft2__price2__value2
                    }
                  >
                    <div
                      className={
                        classes.content__tasks__task2__top2__topLeft2__price2__value2___10000
                      }
                    >
                      <div
                        className={
                          classes.content__tasks__task2__top2__topLeft2__price2__value2___10000__textBlock3
                        }
                      >
                        100 000 руб.
                      </div>
                      <div
                        className={
                          classes.content__tasks__task2__top2__topLeft2__price2__value2___10000__textBlock4
                        }
                      >
                        <p
                          className={
                            classes.content__tasks__task2__top2__topLeft2__price2__value2___10000__textBlock4__labelWrapper5
                          }
                        >
                          <span
                            className={
                              classes.content__tasks__task2__top2__topLeft2__price2__value2___10000__textBlock4__labelWrapper5__label6
                            }
                          >
                            за проект
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.content__tasks__task2__tags2}>
              <div className={classes.content__tasks__task2__tags2__tag5}>
                <div
                  className={classes.content__tasks__task2__tags2__tag5__tag15}
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task2__tags2__tag6}>
                <div
                  className={classes.content__tasks__task2__tags2__tag6__tag16}
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task2__tags2__tag7}>
                <div
                  className={classes.content__tasks__task2__tags2__tag7__tag17}
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task2__tags2__tag8}>
                <div
                  className={classes.content__tasks__task2__tags2__tag8__tag18}
                >
                  tag1
                </div>
              </div>
            </div>
            <div className={classes.content__tasks__task2__bot2}>
              <div className={classes.content__tasks__task2__bot2__bottomLeft2}>
                <div
                  className={
                    classes.content__tasks__task2__bot2__bottomLeft2___1004
                  }
                >
                  <p
                    className={
                      classes.content__tasks__task2__bot2__bottomLeft2___1004__labelWrapper6
                    }
                  >
                    <span
                      className={
                        classes.content__tasks__task2__bot2__bottomLeft2___1004__labelWrapper6__label7
                      }
                    >
                      100
                    </span>
                    <span
                      className={
                        classes.content__tasks__task2__bot2__bottomLeft2___1004__labelWrapper6__label8
                      }
                    >
                      {" "}
                      просмотров
                    </span>
                  </p>
                </div>
                <div
                  className={
                    classes.content__tasks__task2__bot2__bottomLeft2___1005
                  }
                >
                  <p
                    className={
                      classes.content__tasks__task2__bot2__bottomLeft2___1005__labelWrapper7
                    }
                  >
                    <span
                      className={
                        classes.content__tasks__task2__bot2__bottomLeft2___1005__labelWrapper7__label9
                      }
                    >
                      100
                    </span>
                    <span
                      className={
                        classes.content__tasks__task2__bot2__bottomLeft2___1005__labelWrapper7__label10
                      }
                    >
                      {" "}
                      откликов
                    </span>
                  </p>
                </div>
              </div>
              <div className={classes.content__tasks__task2__bot2__frame472}>
                <div
                  className={
                    classes.content__tasks__task2__bot2__frame472___1102
                  }
                >
                  11:00
                </div>
                <div
                  className={
                    classes.content__tasks__task2__bot2__frame472___231220242
                  }
                >
                  23.12.2024
                </div>
              </div>
            </div>
          </div>
          <div className={classes.content__tasks__task3}>
            <div className={classes.content__tasks__task3__top3}>
              <div className={classes.content__tasks__task3__top3__topLeft3}>
                <div
                  className={
                    classes.content__tasks__task3__top3__topLeft3__info3
                  }
                >
                  <div
                    className={
                      classes.content__tasks__task3__top3__topLeft3__info3__unnamed11
                    }
                  >
                    Какое-то очень долгое описание для очень нужной задачи
                    которую необходимо выполнить
                  </div>
                  <div
                    className={
                      classes.content__tasks__task3__top3__topLeft3__info3__unnamed12
                    }
                  >
                    ООО Какая-то компании
                  </div>
                </div>
                <div
                  className={
                    classes.content__tasks__task3__top3__topLeft3__price3
                  }
                >
                  <div
                    className={
                      classes.content__tasks__task3__top3__topLeft3__price3__images2
                    }
                  ></div>
                  <div
                    className={
                      classes.content__tasks__task3__top3__topLeft3__price3__value3
                    }
                  >
                    <div
                      className={
                        classes.content__tasks__task3__top3__topLeft3__price3__value3__unnamed13
                      }
                    >
                      Договорная
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.content__tasks__task3__tags3}>
              <div className={classes.content__tasks__task3__tags3__tag9}>
                <div
                  className={classes.content__tasks__task3__tags3__tag9__tag19}
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task3__tags3__tag10}>
                <div
                  className={
                    classes.content__tasks__task3__tags3__tag10__tag110
                  }
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task3__tags3__tag11}>
                <div
                  className={
                    classes.content__tasks__task3__tags3__tag11__tag111
                  }
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task3__tags3__tag20}>
                <div
                  className={
                    classes.content__tasks__task3__tags3__tag20__tag112
                  }
                >
                  tag1
                </div>
              </div>
            </div>
            <div className={classes.content__tasks__task3__bot3}>
              <div className={classes.content__tasks__task3__bot3__bottomLeft3}>
                <div
                  className={
                    classes.content__tasks__task3__bot3__bottomLeft3___1006
                  }
                >
                  <p
                    className={
                      classes.content__tasks__task3__bot3__bottomLeft3___1006__labelWrapper8
                    }
                  >
                    <span
                      className={
                        classes.content__tasks__task3__bot3__bottomLeft3___1006__labelWrapper8__label11
                      }
                    >
                      100
                    </span>
                    <span
                      className={
                        classes.content__tasks__task3__bot3__bottomLeft3___1006__labelWrapper8__label12
                      }
                    >
                      {" "}
                      просмотров
                    </span>
                  </p>
                </div>
                <div
                  className={
                    classes.content__tasks__task3__bot3__bottomLeft3___1007
                  }
                >
                  <p
                    className={
                      classes.content__tasks__task3__bot3__bottomLeft3___1007__labelWrapper9
                    }
                  >
                    <span
                      className={
                        classes.content__tasks__task3__bot3__bottomLeft3___1007__labelWrapper9__label13
                      }
                    >
                      100
                    </span>
                    <span
                      className={
                        classes.content__tasks__task3__bot3__bottomLeft3___1007__labelWrapper9__label14
                      }
                    >
                      {" "}
                      откликов
                    </span>
                  </p>
                </div>
              </div>
              <div className={classes.content__tasks__task3__bot3__frame473}>
                <div
                  className={
                    classes.content__tasks__task3__bot3__frame473___1103
                  }
                >
                  11:00
                </div>
                <div
                  className={
                    classes.content__tasks__task3__bot3__frame473___231220243
                  }
                >
                  23.12.2024
                </div>
              </div>
            </div>
          </div>
          <div className={classes.content__tasks__task4}>
            <div className={classes.content__tasks__task4__top4}>
              <div className={classes.content__tasks__task4__top4__topLeft4}>
                <div
                  className={
                    classes.content__tasks__task4__top4__topLeft4__info4
                  }
                >
                  <div
                    className={
                      classes.content__tasks__task4__top4__topLeft4__info4__unnamed14
                    }
                  >
                    Какое-то очень долгое описание для очень нужной задачи
                    которую необходимо выполнить
                  </div>
                  <div
                    className={
                      classes.content__tasks__task4__top4__topLeft4__info4__unnamed15
                    }
                  >
                    ООО Какая-то компании
                  </div>
                </div>
                <div
                  className={
                    classes.content__tasks__task4__top4__topLeft4__price4
                  }
                >
                  <div
                    className={
                      classes.content__tasks__task4__top4__topLeft4__price4__images13
                    }
                  ></div>
                  <div
                    className={
                      classes.content__tasks__task4__top4__topLeft4__price4__value4
                    }
                  >
                    <div
                      className={
                        classes.content__tasks__task4__top4__topLeft4__price4__value4___1008
                      }
                    >
                      <div
                        className={
                          classes.content__tasks__task4__top4__topLeft4__price4__value4___1008__textBlock5
                        }
                      >
                        1 000 руб.
                      </div>
                      <div
                        className={
                          classes.content__tasks__task4__top4__topLeft4__price4__value4___1008__textBlock6
                        }
                      >
                        <p
                          className={
                            classes.content__tasks__task4__top4__topLeft4__price4__value4___1008__textBlock6__labelWrapper10
                          }
                        >
                          <span
                            className={
                              classes.content__tasks__task4__top4__topLeft4__price4__value4___1008__textBlock6__labelWrapper10__label15
                            }
                          >
                            за час
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.content__tasks__task4__tags4}>
              <div className={classes.content__tasks__task4__tags4__tag21}>
                <div
                  className={
                    classes.content__tasks__task4__tags4__tag21__tag113
                  }
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task4__tags4__tag22}>
                <div
                  className={
                    classes.content__tasks__task4__tags4__tag22__tag114
                  }
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task4__tags4__tag23}>
                <div
                  className={
                    classes.content__tasks__task4__tags4__tag23__tag115
                  }
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task4__tags4__tag24}>
                <div
                  className={
                    classes.content__tasks__task4__tags4__tag24__tag116
                  }
                >
                  tag1
                </div>
              </div>
            </div>
            <div className={classes.content__tasks__task4__bot4}>
              <div className={classes.content__tasks__task4__bot4__bottomLeft4}>
                <div
                  className={
                    classes.content__tasks__task4__bot4__bottomLeft4___1009
                  }
                >
                  <p
                    className={
                      classes.content__tasks__task4__bot4__bottomLeft4___1009__labelWrapper11
                    }
                  >
                    <span
                      className={
                        classes.content__tasks__task4__bot4__bottomLeft4___1009__labelWrapper11__label16
                      }
                    >
                      100
                    </span>
                    <span
                      className={
                        classes.content__tasks__task4__bot4__bottomLeft4___1009__labelWrapper11__label17
                      }
                    >
                      {" "}
                      просмотров
                    </span>
                  </p>
                </div>
                <div
                  className={
                    classes.content__tasks__task4__bot4__bottomLeft4___10010
                  }
                >
                  <p
                    className={
                      classes.content__tasks__task4__bot4__bottomLeft4___10010__labelWrapper12
                    }
                  >
                    <span
                      className={
                        classes.content__tasks__task4__bot4__bottomLeft4___10010__labelWrapper12__label18
                      }
                    >
                      100
                    </span>
                    <span
                      className={
                        classes.content__tasks__task4__bot4__bottomLeft4___10010__labelWrapper12__label19
                      }
                    >
                      {" "}
                      откликов
                    </span>
                  </p>
                </div>
              </div>
              <div className={classes.content__tasks__task4__bot4__frame474}>
                <div
                  className={
                    classes.content__tasks__task4__bot4__frame474___1104
                  }
                >
                  11:00
                </div>
                <div
                  className={
                    classes.content__tasks__task4__bot4__frame474___231220244
                  }
                >
                  23.12.2024
                </div>
              </div>
            </div>
          </div>
          <div className={classes.content__tasks__task5}>
            <div className={classes.content__tasks__task5__top5}>
              <div className={classes.content__tasks__task5__top5__topLeft5}>
                <div
                  className={
                    classes.content__tasks__task5__top5__topLeft5__info5
                  }
                >
                  <div
                    className={
                      classes.content__tasks__task5__top5__topLeft5__info5__unnamed16
                    }
                  >
                    Какое-то очень долгое описание для очень нужной задачи
                    которую необходимо выполнить
                  </div>
                  <div
                    className={
                      classes.content__tasks__task5__top5__topLeft5__info5__unnamed17
                    }
                  >
                    ООО Какая-то компании
                  </div>
                </div>
                <div
                  className={
                    classes.content__tasks__task5__top5__topLeft5__price5
                  }
                >
                  <div
                    className={
                      classes.content__tasks__task5__top5__topLeft5__price5__images14
                    }
                  ></div>
                  <div
                    className={
                      classes.content__tasks__task5__top5__topLeft5__price5__value5
                    }
                  >
                    <div
                      className={
                        classes.content__tasks__task5__top5__topLeft5__price5__value5___100002
                      }
                    >
                      <div
                        className={
                          classes.content__tasks__task5__top5__topLeft5__price5__value5___100002__textBlock7
                        }
                      >
                        100 000 руб.
                      </div>
                      <div
                        className={
                          classes.content__tasks__task5__top5__topLeft5__price5__value5___100002__textBlock8
                        }
                      >
                        <p
                          className={
                            classes.content__tasks__task5__top5__topLeft5__price5__value5___100002__textBlock8__labelWrapper13
                          }
                        >
                          <span
                            className={
                              classes.content__tasks__task5__top5__topLeft5__price5__value5___100002__textBlock8__labelWrapper13__label20
                            }
                          >
                            за проект
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.content__tasks__task5__tags5}>
              <div className={classes.content__tasks__task5__tags5__tag25}>
                <div
                  className={
                    classes.content__tasks__task5__tags5__tag25__tag117
                  }
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task5__tags5__tag26}>
                <div
                  className={
                    classes.content__tasks__task5__tags5__tag26__tag118
                  }
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task5__tags5__tag27}>
                <div
                  className={
                    classes.content__tasks__task5__tags5__tag27__tag119
                  }
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task5__tags5__tag28}>
                <div
                  className={
                    classes.content__tasks__task5__tags5__tag28__tag120
                  }
                >
                  tag1
                </div>
              </div>
            </div>
            <div className={classes.content__tasks__task5__bot5}>
              <div className={classes.content__tasks__task5__bot5__bottomLeft5}>
                <div
                  className={
                    classes.content__tasks__task5__bot5__bottomLeft5___10011
                  }
                >
                  <p
                    className={
                      classes.content__tasks__task5__bot5__bottomLeft5___10011__labelWrapper14
                    }
                  >
                    <span
                      className={
                        classes.content__tasks__task5__bot5__bottomLeft5___10011__labelWrapper14__label21
                      }
                    >
                      100
                    </span>
                    <span
                      className={
                        classes.content__tasks__task5__bot5__bottomLeft5___10011__labelWrapper14__label22
                      }
                    >
                      {" "}
                      просмотров
                    </span>
                  </p>
                </div>
                <div
                  className={
                    classes.content__tasks__task5__bot5__bottomLeft5___10012
                  }
                >
                  <p
                    className={
                      classes.content__tasks__task5__bot5__bottomLeft5___10012__labelWrapper15
                    }
                  >
                    <span
                      className={
                        classes.content__tasks__task5__bot5__bottomLeft5___10012__labelWrapper15__label23
                      }
                    >
                      100
                    </span>
                    <span
                      className={
                        classes.content__tasks__task5__bot5__bottomLeft5___10012__labelWrapper15__label24
                      }
                    >
                      {" "}
                      откликов
                    </span>
                  </p>
                </div>
              </div>
              <div className={classes.content__tasks__task5__bot5__frame475}>
                <div
                  className={
                    classes.content__tasks__task5__bot5__frame475___1105
                  }
                >
                  11:00
                </div>
                <div
                  className={
                    classes.content__tasks__task5__bot5__frame475___231220245
                  }
                >
                  23.12.2024
                </div>
              </div>
            </div>
          </div>
          <div className={classes.content__tasks__task6}>
            <div className={classes.content__tasks__task6__top6}>
              <div className={classes.content__tasks__task6__top6__topLeft6}>
                <div
                  className={
                    classes.content__tasks__task6__top6__topLeft6__info6
                  }
                >
                  <div
                    className={
                      classes.content__tasks__task6__top6__topLeft6__info6__unnamed18
                    }
                  >
                    Какое-то очень долгое описание для очень нужной задачи
                    которую необходимо выполнить
                  </div>
                  <div
                    className={
                      classes.content__tasks__task6__top6__topLeft6__info6__unnamed19
                    }
                  >
                    ООО Какая-то компании
                  </div>
                </div>
                <div
                  className={
                    classes.content__tasks__task6__top6__topLeft6__price6
                  }
                >
                  <div
                    className={
                      classes.content__tasks__task6__top6__topLeft6__price6__images22
                    }
                  ></div>
                  <div
                    className={
                      classes.content__tasks__task6__top6__topLeft6__price6__value6
                    }
                  >
                    <div
                      className={
                        classes.content__tasks__task6__top6__topLeft6__price6__value6__unnamed20
                      }
                    >
                      Договорная
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.content__tasks__task6__tags6}>
              <div className={classes.content__tasks__task6__tags6__tag29}>
                <div
                  className={
                    classes.content__tasks__task6__tags6__tag29__tag121
                  }
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task6__tags6__tag30}>
                <div
                  className={
                    classes.content__tasks__task6__tags6__tag30__tag122
                  }
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task6__tags6__tag31}>
                <div
                  className={
                    classes.content__tasks__task6__tags6__tag31__tag123
                  }
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task6__tags6__tag32}>
                <div
                  className={
                    classes.content__tasks__task6__tags6__tag32__tag124
                  }
                >
                  tag1
                </div>
              </div>
            </div>
            <div className={classes.content__tasks__task6__bot6}>
              <div className={classes.content__tasks__task6__bot6__bottomLeft6}>
                <div
                  className={
                    classes.content__tasks__task6__bot6__bottomLeft6___10013
                  }
                >
                  <p
                    className={
                      classes.content__tasks__task6__bot6__bottomLeft6___10013__labelWrapper16
                    }
                  >
                    <span
                      className={
                        classes.content__tasks__task6__bot6__bottomLeft6___10013__labelWrapper16__label25
                      }
                    >
                      100
                    </span>
                    <span
                      className={
                        classes.content__tasks__task6__bot6__bottomLeft6___10013__labelWrapper16__label26
                      }
                    >
                      {" "}
                      просмотров
                    </span>
                  </p>
                </div>
                <div
                  className={
                    classes.content__tasks__task6__bot6__bottomLeft6___10014
                  }
                >
                  <p
                    className={
                      classes.content__tasks__task6__bot6__bottomLeft6___10014__labelWrapper17
                    }
                  >
                    <span
                      className={
                        classes.content__tasks__task6__bot6__bottomLeft6___10014__labelWrapper17__label27
                      }
                    >
                      100
                    </span>
                    <span
                      className={
                        classes.content__tasks__task6__bot6__bottomLeft6___10014__labelWrapper17__label28
                      }
                    >
                      {" "}
                      откликов
                    </span>
                  </p>
                </div>
              </div>
              <div className={classes.content__tasks__task6__bot6__frame476}>
                <div
                  className={
                    classes.content__tasks__task6__bot6__frame476___1106
                  }
                >
                  11:00
                </div>
                <div
                  className={
                    classes.content__tasks__task6__bot6__frame476___231220246
                  }
                >
                  23.12.2024
                </div>
              </div>
            </div>
          </div>
          <div className={classes.content__tasks__task7}>
            <div className={classes.content__tasks__task7__top7}>
              <div className={classes.content__tasks__task7__top7__topLeft7}>
                <div
                  className={
                    classes.content__tasks__task7__top7__topLeft7__info7
                  }
                >
                  <div
                    className={
                      classes.content__tasks__task7__top7__topLeft7__info7__unnamed21
                    }
                  >
                    Какое-то очень долгое описание для очень нужной задачи
                    которую необходимо выполнить
                  </div>
                  <div
                    className={
                      classes.content__tasks__task7__top7__topLeft7__info7__unnamed22
                    }
                  >
                    ООО Какая-то компании
                  </div>
                </div>
                <div
                  className={
                    classes.content__tasks__task7__top7__topLeft7__price7
                  }
                >
                  <div
                    className={
                      classes.content__tasks__task7__top7__topLeft7__price7__images15
                    }
                  ></div>
                  <div
                    className={
                      classes.content__tasks__task7__top7__topLeft7__price7__value7
                    }
                  >
                    <div
                      className={
                        classes.content__tasks__task7__top7__topLeft7__price7__value7___10015
                      }
                    >
                      <div
                        className={
                          classes.content__tasks__task7__top7__topLeft7__price7__value7___10015__textBlock9
                        }
                      >
                        1 000 руб.
                      </div>
                      <div
                        className={
                          classes.content__tasks__task7__top7__topLeft7__price7__value7___10015__textBlock10
                        }
                      >
                        <p
                          className={
                            classes.content__tasks__task7__top7__topLeft7__price7__value7___10015__textBlock10__labelWrapper18
                          }
                        >
                          <span
                            className={
                              classes.content__tasks__task7__top7__topLeft7__price7__value7___10015__textBlock10__labelWrapper18__label29
                            }
                          >
                            за час
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.content__tasks__task7__tags7}>
              <div className={classes.content__tasks__task7__tags7__tag33}>
                <div
                  className={
                    classes.content__tasks__task7__tags7__tag33__tag125
                  }
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task7__tags7__tag34}>
                <div
                  className={
                    classes.content__tasks__task7__tags7__tag34__tag126
                  }
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task7__tags7__tag35}>
                <div
                  className={
                    classes.content__tasks__task7__tags7__tag35__tag127
                  }
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task7__tags7__tag36}>
                <div
                  className={
                    classes.content__tasks__task7__tags7__tag36__tag128
                  }
                >
                  tag1
                </div>
              </div>
            </div>
            <div className={classes.content__tasks__task7__bot7}>
              <div className={classes.content__tasks__task7__bot7__bottomLeft7}>
                <div
                  className={
                    classes.content__tasks__task7__bot7__bottomLeft7___10016
                  }
                >
                  <p
                    className={
                      classes.content__tasks__task7__bot7__bottomLeft7___10016__labelWrapper19
                    }
                  >
                    <span
                      className={
                        classes.content__tasks__task7__bot7__bottomLeft7___10016__labelWrapper19__label30
                      }
                    >
                      100
                    </span>
                    <span
                      className={
                        classes.content__tasks__task7__bot7__bottomLeft7___10016__labelWrapper19__label31
                      }
                    >
                      {" "}
                      просмотров
                    </span>
                  </p>
                </div>
                <div
                  className={
                    classes.content__tasks__task7__bot7__bottomLeft7___10017
                  }
                >
                  <p
                    className={
                      classes.content__tasks__task7__bot7__bottomLeft7___10017__labelWrapper20
                    }
                  >
                    <span
                      className={
                        classes.content__tasks__task7__bot7__bottomLeft7___10017__labelWrapper20__label32
                      }
                    >
                      100
                    </span>
                    <span
                      className={
                        classes.content__tasks__task7__bot7__bottomLeft7___10017__labelWrapper20__label33
                      }
                    >
                      {" "}
                      откликов
                    </span>
                  </p>
                </div>
              </div>
              <div className={classes.content__tasks__task7__bot7__frame477}>
                <div
                  className={
                    classes.content__tasks__task7__bot7__frame477___1107
                  }
                >
                  11:00
                </div>
                <div
                  className={
                    classes.content__tasks__task7__bot7__frame477___231220247
                  }
                >
                  23.12.2024
                </div>
              </div>
            </div>
          </div>
          <div className={classes.content__tasks__task8}>
            <div className={classes.content__tasks__task8__top8}>
              <div className={classes.content__tasks__task8__top8__topLeft8}>
                <div
                  className={
                    classes.content__tasks__task8__top8__topLeft8__info8
                  }
                >
                  <div
                    className={
                      classes.content__tasks__task8__top8__topLeft8__info8__unnamed23
                    }
                  >
                    Какое-то очень долгое описание для очень нужной задачи
                    которую необходимо выполнить
                  </div>
                  <div
                    className={
                      classes.content__tasks__task8__top8__topLeft8__info8__unnamed24
                    }
                  >
                    ООО Какая-то компании
                  </div>
                </div>
                <div
                  className={
                    classes.content__tasks__task8__top8__topLeft8__price8
                  }
                >
                  <div
                    className={
                      classes.content__tasks__task8__top8__topLeft8__price8__images16
                    }
                  ></div>
                  <div
                    className={
                      classes.content__tasks__task8__top8__topLeft8__price8__value8
                    }
                  >
                    <div
                      className={
                        classes.content__tasks__task8__top8__topLeft8__price8__value8___10018
                      }
                    >
                      <div
                        className={
                          classes.content__tasks__task8__top8__topLeft8__price8__value8___10018__textBlock11
                        }
                      >
                        1 000 руб.
                      </div>
                      <div
                        className={
                          classes.content__tasks__task8__top8__topLeft8__price8__value8___10018__textBlock12
                        }
                      >
                        <p
                          className={
                            classes.content__tasks__task8__top8__topLeft8__price8__value8___10018__textBlock12__labelWrapper21
                          }
                        >
                          <span
                            className={
                              classes.content__tasks__task8__top8__topLeft8__price8__value8___10018__textBlock12__labelWrapper21__label34
                            }
                          >
                            за час
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.content__tasks__task8__tags8}>
              <div className={classes.content__tasks__task8__tags8__tag37}>
                <div
                  className={
                    classes.content__tasks__task8__tags8__tag37__tag129
                  }
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task8__tags8__tag38}>
                <div
                  className={
                    classes.content__tasks__task8__tags8__tag38__tag130
                  }
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task8__tags8__tag39}>
                <div
                  className={
                    classes.content__tasks__task8__tags8__tag39__tag131
                  }
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task8__tags8__tag40}>
                <div
                  className={
                    classes.content__tasks__task8__tags8__tag40__tag132
                  }
                >
                  tag1
                </div>
              </div>
            </div>
            <div className={classes.content__tasks__task8__bot8}>
              <div className={classes.content__tasks__task8__bot8__bottomLeft8}>
                <div
                  className={
                    classes.content__tasks__task8__bot8__bottomLeft8___10019
                  }
                >
                  <p
                    className={
                      classes.content__tasks__task8__bot8__bottomLeft8___10019__labelWrapper22
                    }
                  >
                    <span
                      className={
                        classes.content__tasks__task8__bot8__bottomLeft8___10019__labelWrapper22__label35
                      }
                    >
                      100
                    </span>
                    <span
                      className={
                        classes.content__tasks__task8__bot8__bottomLeft8___10019__labelWrapper22__label36
                      }
                    >
                      {" "}
                      просмотров
                    </span>
                  </p>
                </div>
                <div
                  className={
                    classes.content__tasks__task8__bot8__bottomLeft8___10020
                  }
                >
                  <p
                    className={
                      classes.content__tasks__task8__bot8__bottomLeft8___10020__labelWrapper23
                    }
                  >
                    <span
                      className={
                        classes.content__tasks__task8__bot8__bottomLeft8___10020__labelWrapper23__label37
                      }
                    >
                      100
                    </span>
                    <span
                      className={
                        classes.content__tasks__task8__bot8__bottomLeft8___10020__labelWrapper23__label38
                      }
                    >
                      {" "}
                      откликов
                    </span>
                  </p>
                </div>
              </div>
              <div className={classes.content__tasks__task8__bot8__frame478}>
                <div
                  className={
                    classes.content__tasks__task8__bot8__frame478___1108
                  }
                >
                  11:00
                </div>
                <div
                  className={
                    classes.content__tasks__task8__bot8__frame478___231220248
                  }
                >
                  23.12.2024
                </div>
              </div>
            </div>
          </div>
          <div className={classes.content__tasks__task9}>
            <div className={classes.content__tasks__task9__top9}>
              <div className={classes.content__tasks__task9__top9__topLeft9}>
                <div
                  className={
                    classes.content__tasks__task9__top9__topLeft9__info9
                  }
                >
                  <div
                    className={
                      classes.content__tasks__task9__top9__topLeft9__info9__unnamed25
                    }
                  >
                    Какое-то очень долгое описание для очень нужной задачи
                    которую необходимо выполнить
                  </div>
                  <div
                    className={
                      classes.content__tasks__task9__top9__topLeft9__info9__unnamed26
                    }
                  >
                    ООО Какая-то компании
                  </div>
                </div>
                <div
                  className={
                    classes.content__tasks__task9__top9__topLeft9__price9
                  }
                >
                  <div
                    className={
                      classes.content__tasks__task9__top9__topLeft9__price9__images17
                    }
                  ></div>
                  <div
                    className={
                      classes.content__tasks__task9__top9__topLeft9__price9__value9
                    }
                  >
                    <div
                      className={
                        classes.content__tasks__task9__top9__topLeft9__price9__value9___100003
                      }
                    >
                      <div
                        className={
                          classes.content__tasks__task9__top9__topLeft9__price9__value9___100003__textBlock13
                        }
                      >
                        100 000 руб.
                      </div>
                      <div
                        className={
                          classes.content__tasks__task9__top9__topLeft9__price9__value9___100003__textBlock14
                        }
                      >
                        <p
                          className={
                            classes.content__tasks__task9__top9__topLeft9__price9__value9___100003__textBlock14__labelWrapper24
                          }
                        >
                          <span
                            className={
                              classes.content__tasks__task9__top9__topLeft9__price9__value9___100003__textBlock14__labelWrapper24__label39
                            }
                          >
                            за проект
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.content__tasks__task9__tags9}>
              <div className={classes.content__tasks__task9__tags9__tag41}>
                <div
                  className={
                    classes.content__tasks__task9__tags9__tag41__tag133
                  }
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task9__tags9__tag42}>
                <div
                  className={
                    classes.content__tasks__task9__tags9__tag42__tag134
                  }
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task9__tags9__tag43}>
                <div
                  className={
                    classes.content__tasks__task9__tags9__tag43__tag135
                  }
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task9__tags9__tag44}>
                <div
                  className={
                    classes.content__tasks__task9__tags9__tag44__tag136
                  }
                >
                  tag1
                </div>
              </div>
            </div>
            <div className={classes.content__tasks__task9__bot9}>
              <div className={classes.content__tasks__task9__bot9__bottomLeft9}>
                <div
                  className={
                    classes.content__tasks__task9__bot9__bottomLeft9___10021
                  }
                >
                  <p
                    className={
                      classes.content__tasks__task9__bot9__bottomLeft9___10021__labelWrapper25
                    }
                  >
                    <span
                      className={
                        classes.content__tasks__task9__bot9__bottomLeft9___10021__labelWrapper25__label40
                      }
                    >
                      100
                    </span>
                    <span
                      className={
                        classes.content__tasks__task9__bot9__bottomLeft9___10021__labelWrapper25__label41
                      }
                    >
                      {" "}
                      просмотров
                    </span>
                  </p>
                </div>
                <div
                  className={
                    classes.content__tasks__task9__bot9__bottomLeft9___10022
                  }
                >
                  <p
                    className={
                      classes.content__tasks__task9__bot9__bottomLeft9___10022__labelWrapper26
                    }
                  >
                    <span
                      className={
                        classes.content__tasks__task9__bot9__bottomLeft9___10022__labelWrapper26__label42
                      }
                    >
                      100
                    </span>
                    <span
                      className={
                        classes.content__tasks__task9__bot9__bottomLeft9___10022__labelWrapper26__label43
                      }
                    >
                      {" "}
                      откликов
                    </span>
                  </p>
                </div>
              </div>
              <div className={classes.content__tasks__task9__bot9__frame479}>
                <div
                  className={
                    classes.content__tasks__task9__bot9__frame479___1109
                  }
                >
                  11:00
                </div>
                <div
                  className={
                    classes.content__tasks__task9__bot9__frame479___231220249
                  }
                >
                  23.12.2024
                </div>
              </div>
            </div>
          </div>
          <div className={classes.content__tasks__task10}>
            <div className={classes.content__tasks__task10__top10}>
              <div className={classes.content__tasks__task10__top10__topLeft10}>
                <div
                  className={
                    classes.content__tasks__task10__top10__topLeft10__info10
                  }
                >
                  <div
                    className={
                      classes.content__tasks__task10__top10__topLeft10__info10__unnamed27
                    }
                  >
                    Какое-то очень долгое описание для очень нужной задачи
                    которую необходимо выполнить
                  </div>
                  <div
                    className={
                      classes.content__tasks__task10__top10__topLeft10__info10__unnamed28
                    }
                  >
                    ООО Какая-то компании
                  </div>
                </div>
                <div
                  className={
                    classes.content__tasks__task10__top10__topLeft10__price10
                  }
                >
                  <div
                    className={
                      classes.content__tasks__task10__top10__topLeft10__price10__images23
                    }
                  ></div>
                  <div
                    className={
                      classes.content__tasks__task10__top10__topLeft10__price10__value10
                    }
                  >
                    <div
                      className={
                        classes.content__tasks__task10__top10__topLeft10__price10__value10__unnamed29
                      }
                    >
                      Договорная
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.content__tasks__task10__tags10}>
              <div className={classes.content__tasks__task10__tags10__tag45}>
                <div
                  className={
                    classes.content__tasks__task10__tags10__tag45__tag137
                  }
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task10__tags10__tag46}>
                <div
                  className={
                    classes.content__tasks__task10__tags10__tag46__tag138
                  }
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task10__tags10__tag47}>
                <div
                  className={
                    classes.content__tasks__task10__tags10__tag47__tag139
                  }
                >
                  tag1
                </div>
              </div>
              <div className={classes.content__tasks__task10__tags10__tag48}>
                <div
                  className={
                    classes.content__tasks__task10__tags10__tag48__tag140
                  }
                >
                  tag1
                </div>
              </div>
            </div>
            <div className={classes.content__tasks__task10__bot10}>
              <div
                className={classes.content__tasks__task10__bot10__bottomLeft10}
              >
                <div
                  className={
                    classes.content__tasks__task10__bot10__bottomLeft10___10023
                  }
                >
                  <p
                    className={
                      classes.content__tasks__task10__bot10__bottomLeft10___10023__labelWrapper27
                    }
                  >
                    <span
                      className={
                        classes.content__tasks__task10__bot10__bottomLeft10___10023__labelWrapper27__label44
                      }
                    >
                      100
                    </span>
                    <span
                      className={
                        classes.content__tasks__task10__bot10__bottomLeft10___10023__labelWrapper27__label45
                      }
                    >
                      {" "}
                      просмотров
                    </span>
                  </p>
                </div>
                <div
                  className={
                    classes.content__tasks__task10__bot10__bottomLeft10___10024
                  }
                >
                  <p
                    className={
                      classes.content__tasks__task10__bot10__bottomLeft10___10024__labelWrapper28
                    }
                  >
                    <span
                      className={
                        classes.content__tasks__task10__bot10__bottomLeft10___10024__labelWrapper28__label46
                      }
                    >
                      100
                    </span>
                    <span
                      className={
                        classes.content__tasks__task10__bot10__bottomLeft10___10024__labelWrapper28__label47
                      }
                    >
                      {" "}
                      откликов
                    </span>
                  </p>
                </div>
              </div>
              <div className={classes.content__tasks__task10__bot10__frame4710}>
                <div
                  className={
                    classes.content__tasks__task10__bot10__frame4710___11010
                  }
                >
                  11:00
                </div>
                <div
                  className={
                    classes.content__tasks__task10__bot10__frame4710___2312202410
                  }
                >
                  23.12.2024
                </div>
              </div>
            </div>
          </div>
          <div className={classes.content__tasks__botNavTask}>
            <button className={classes.content__tasks__botNavTask__button2}>
              <div
                className={
                  classes.content__tasks__botNavTask__button2__unnamed30
                }
              >
                Пред.
              </div>
            </button>
            <div className={classes.content__tasks__botNavTask__selected}>
              <div
                className={classes.content__tasks__botNavTask__selected___13}
              >
                1
              </div>
            </div>
            <div className={classes.content__tasks__botNavTask___2}>2</div>
            <div className={classes.content__tasks__botNavTask___3}>3</div>
            <div className={classes.content__tasks__botNavTask___4}>4</div>
            <div className={classes.content__tasks__botNavTask__unnamed31}>
              ...
            </div>
            <div className={classes.content__tasks__botNavTask___10}>10</div>
            <button className={classes.content__tasks__botNavTask__button3}>
              <div
                className={
                  classes.content__tasks__botNavTask__button3__unnamed32
                }
              >
                След.
              </div>
            </button>
          </div>
        </div>
        <div className={classes.content__rightSide}>
          <button className={classes.content__rightSide__button4}>
            <div className={classes.content__rightSide__button4__unnamed33}>
              Создать заказ
            </div>
          </button>
          <div className={classes.content__rightSide__filter}>
            <div className={classes.content__rightSide__filter__block1}>
              <div
                className={classes.content__rightSide__filter__block1__block}
              >
                <div
                  className={
                    classes.content__rightSide__filter__block1__block__frame46
                  }
                >
                  <div
                    className={
                      classes.content__rightSide__filter__block1__block__frame46___14
                    }
                  ></div>
                  <div
                    className={
                      classes.content__rightSide__filter__block1__block__frame46__rectangle3
                    }
                  ></div>
                </div>
                <div
                  className={
                    classes.content__rightSide__filter__block1__block__unnamed34
                  }
                >
                  Сфера деятельности
                </div>
              </div>
              <div
                className={classes.content__rightSide__filter__block1__finder}
              >
                <div
                  className={
                    classes.content__rightSide__filter__block1__finder__unnamed35
                  }
                >
                  Поиск
                </div>
                <div
                  className={
                    classes.content__rightSide__filter__block1__finder__frame45
                  }
                >
                  <div
                    className={
                      classes.content__rightSide__filter__block1__finder__frame45___42
                    }
                  ></div>
                  <div
                    className={
                      classes.content__rightSide__filter__block1__finder__frame45__rectangle2
                    }
                  ></div>
                </div>
              </div>
              <div
                className={
                  classes.content__rightSide__filter__block1__checkBoxs
                }
              >
                <div
                  className={
                    classes.content__rightSide__filter__block1__checkBoxs__allCategory
                  }
                >
                  <div
                    className={
                      classes.content__rightSide__filter__block1__checkBoxs__allCategory__rectangle1
                    }
                  ></div>
                  <div
                    className={
                      classes.content__rightSide__filter__block1__checkBoxs__allCategory__unnamed36
                    }
                  >
                    Все сферы
                  </div>
                </div>
                <div
                  className={
                    classes.content__rightSide__filter__block1__checkBoxs__category
                  }
                >
                  <div
                    className={
                      classes.content__rightSide__filter__block1__checkBoxs__category__rectangle12
                    }
                  ></div>
                  <div
                    className={
                      classes.content__rightSide__filter__block1__checkBoxs__category__unnamed37
                    }
                  >
                    Аналитика данных
                  </div>
                </div>
                <div
                  className={
                    classes.content__rightSide__filter__block1__checkBoxs__category2
                  }
                >
                  <div
                    className={
                      classes.content__rightSide__filter__block1__checkBoxs__category2__rectangle13
                    }
                  ></div>
                  <div
                    className={
                      classes.content__rightSide__filter__block1__checkBoxs__category2__unnamed38
                    }
                  >
                    Дизайн
                  </div>
                </div>
                <div
                  className={
                    classes.content__rightSide__filter__block1__checkBoxs__category3
                  }
                >
                  <div
                    className={
                      classes.content__rightSide__filter__block1__checkBoxs__category3__rectangle14
                    }
                  ></div>
                  <div
                    className={
                      classes.content__rightSide__filter__block1__checkBoxs__category3__unnamed39
                    }
                  >
                    Поддержка проекта
                  </div>
                </div>
                <div
                  className={
                    classes.content__rightSide__filter__block1__checkBoxs__category4
                  }
                >
                  <div
                    className={
                      classes.content__rightSide__filter__block1__checkBoxs__category4__rectangle15
                    }
                  ></div>
                  <div
                    className={
                      classes.content__rightSide__filter__block1__checkBoxs__category4__unnamed40
                    }
                  >
                    Разработка
                  </div>
                </div>
                <div
                  className={
                    classes.content__rightSide__filter__block1__checkBoxs__category5
                  }
                >
                  <div
                    className={
                      classes.content__rightSide__filter__block1__checkBoxs__category5__rectangle16
                    }
                  ></div>
                  <div
                    className={
                      classes.content__rightSide__filter__block1__checkBoxs__category5__unnamed41
                    }
                  >
                    Тестировка
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.content__rightSide__filter__block2}>
              <div
                className={classes.content__rightSide__filter__block2__block3}
              >
                <div
                  className={
                    classes.content__rightSide__filter__block2__block3__frame462
                  }
                >
                  <div
                    className={
                      classes.content__rightSide__filter__block2__block3__frame462___15
                    }
                  ></div>
                  <div
                    className={
                      classes.content__rightSide__filter__block2__block3__frame462__rectangle32
                    }
                  ></div>
                </div>
                <div
                  className={
                    classes.content__rightSide__filter__block2__block3__unnamed42
                  }
                >
                  Цена
                </div>
              </div>
              <div
                className={classes.content__rightSide__filter__block2__price11}
              >
                <div
                  className={
                    classes.content__rightSide__filter__block2__price11__start
                  }
                >
                  <div
                    className={
                      classes.content__rightSide__filter__block2__price11__start__unnamed43
                    }
                  >
                    от
                  </div>
                </div>
                <div
                  className={
                    classes.content__rightSide__filter__block2__price11__end
                  }
                >
                  <div
                    className={
                      classes.content__rightSide__filter__block2__price11__end__unnamed44
                    }
                  >
                    до
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.content__rightSide__filter__block32}>
              <div
                className={classes.content__rightSide__filter__block32__block4}
              >
                <div
                  className={
                    classes.content__rightSide__filter__block32__block4__frame463
                  }
                >
                  <div
                    className={
                      classes.content__rightSide__filter__block32__block4__frame463___16
                    }
                  ></div>
                  <div
                    className={
                      classes.content__rightSide__filter__block32__block4__frame463__rectangle33
                    }
                  ></div>
                </div>
                <div
                  className={
                    classes.content__rightSide__filter__block32__block4__unnamed45
                  }
                >
                  Тэги
                </div>
              </div>
              <div
                className={classes.content__rightSide__filter__block32__finder2}
              >
                <div
                  className={
                    classes.content__rightSide__filter__block32__finder2__unnamed46
                  }
                >
                  Поиск
                </div>
                <div
                  className={
                    classes.content__rightSide__filter__block32__finder2__frame452
                  }
                >
                  <div
                    className={
                      classes.content__rightSide__filter__block32__finder2__frame452___43
                    }
                  ></div>
                  <div
                    className={
                      classes.content__rightSide__filter__block32__finder2__frame452__rectangle22
                    }
                  ></div>
                </div>
              </div>
              <div
                className={classes.content__rightSide__filter__block32__tags11}
              >
                <div
                  className={
                    classes.content__rightSide__filter__block32__tags11__tag49
                  }
                >
                  <div
                    className={
                      classes.content__rightSide__filter__block32__tags11__tag49__sQL
                    }
                  >
                    SQL
                  </div>
                </div>
                <div
                  className={
                    classes.content__rightSide__filter__block32__tags11__tag50
                  }
                >
                  <div
                    className={
                      classes.content__rightSide__filter__block32__tags11__tag50__backend
                    }
                  >
                    Backend
                  </div>
                </div>
                <div
                  className={
                    classes.content__rightSide__filter__block32__tags11__tag51
                  }
                >
                  <div
                    className={
                      classes.content__rightSide__filter__block32__tags11__tag51__php
                    }
                  >
                    php
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.content__rightSide__filter__block42}>
              <div
                className={classes.content__rightSide__filter__block42__block5}
              >
                <div
                  className={
                    classes.content__rightSide__filter__block42__block5__frame464
                  }
                >
                  <div
                    className={
                      classes.content__rightSide__filter__block42__block5__frame464___17
                    }
                  ></div>
                  <div
                    className={
                      classes.content__rightSide__filter__block42__block5__frame464__rectangle34
                    }
                  ></div>
                </div>
                <div
                  className={
                    classes.content__rightSide__filter__block42__block5__unnamed47
                  }
                >
                  Дополнительно
                </div>
              </div>
              <div
                className={
                  classes.content__rightSide__filter__block42__checkBoxs2
                }
              >
                <div
                  className={
                    classes.content__rightSide__filter__block42__checkBoxs2__category6
                  }
                >
                  <div
                    className={
                      classes.content__rightSide__filter__block42__checkBoxs2__category6__rectangle17
                    }
                  ></div>
                  <div
                    className={
                      classes.content__rightSide__filter__block42__checkBoxs2__category6___18
                    }
                  >
                    Опция 1
                  </div>
                </div>
                <div
                  className={
                    classes.content__rightSide__filter__block42__checkBoxs2__category7
                  }
                >
                  <div
                    className={
                      classes.content__rightSide__filter__block42__checkBoxs2__category7__rectangle18
                    }
                  ></div>
                  <div
                    className={
                      classes.content__rightSide__filter__block42__checkBoxs2__category7___22
                    }
                  >
                    Опция 2
                  </div>
                </div>
                <div
                  className={
                    classes.content__rightSide__filter__block42__checkBoxs2__category8
                  }
                >
                  <div
                    className={
                      classes.content__rightSide__filter__block42__checkBoxs2__category8__rectangle19
                    }
                  ></div>
                  <div
                    className={
                      classes.content__rightSide__filter__block42__checkBoxs2__category8___32
                    }
                  >
                    Опция 3
                  </div>
                </div>
                <div
                  className={
                    classes.content__rightSide__filter__block42__checkBoxs2__category9
                  }
                >
                  <div
                    className={
                      classes.content__rightSide__filter__block42__checkBoxs2__category9__rectangle110
                    }
                  ></div>
                  <div
                    className={
                      classes.content__rightSide__filter__block42__checkBoxs2__category9___44
                    }
                  >
                    Опция 4
                  </div>
                </div>
                <div
                  className={
                    classes.content__rightSide__filter__block42__checkBoxs2__category10
                  }
                >
                  <div
                    className={
                      classes.content__rightSide__filter__block42__checkBoxs2__category10__rectangle111
                    }
                  ></div>
                  <div
                    className={
                      classes.content__rightSide__filter__block42__checkBoxs2__category10___5
                    }
                  >
                    Опция 5
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.content__rightSide__filter__buttonBlock}>
              <button
                className={
                  classes.content__rightSide__filter__buttonBlock__button5
                }
              >
                <div
                  className={
                    classes.content__rightSide__filter__buttonBlock__button5__unnamed48
                  }
                >
                  Применить
                </div>
              </button>
              <button
                className={
                  classes.content__rightSide__filter__buttonBlock__button6
                }
              >
                <div
                  className={
                    classes.content__rightSide__filter__buttonBlock__button6__unnamed49
                  }
                >
                  Сбросить
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.bottom__botMenu}>
          <div className={classes.bottom__botMenu__about}>
            <div className={classes.bottom__botMenu__about__itFreelancer2}>
              ItFreelancer
            </div>
            <div className={classes.bottom__botMenu__about__frame25}>
              <div
                className={classes.bottom__botMenu__about__frame25__unnamed50}
              >
                О Сервисе
              </div>
              <div
                className={classes.bottom__botMenu__about__frame25__unnamed51}
              >
                Услуги и цены
              </div>
              <div
                className={classes.bottom__botMenu__about__frame25__unnamed52}
              >
                Контакты
              </div>
            </div>
          </div>
          <div className={classes.bottom__botMenu__help}>
            <div className={classes.bottom__botMenu__help__unnamed53}>
              Помощь
            </div>
            <div className={classes.bottom__botMenu__help__frame252}>
              <div
                className={classes.bottom__botMenu__help__frame252__unnamed54}
              >
                <a
                  href="https://freelance.habr.com/help/freelancer"
                  target="_blank"
                  rel="noreferrer"
                  className={
                    classes.bottom__botMenu__help__frame252__unnamed54__textBlock15
                  }
                >
                  Для исполнителя
                </a>
              </div>
              <div
                className={classes.bottom__botMenu__help__frame252__unnamed55}
              >
                <a
                  href="https://freelance.habr.com/help/customer"
                  target="_blank"
                  rel="noreferrer"
                  className={
                    classes.bottom__botMenu__help__frame252__unnamed55__textBlock16
                  }
                >
                  Для заказчика
                </a>
              </div>
              <div
                className={classes.bottom__botMenu__help__frame252__unnamed56}
              >
                Служба поддрежки
              </div>
            </div>
          </div>
          <div className={classes.bottom__botMenu__documents}>
            <div className={classes.bottom__botMenu__documents__unnamed57}>
              Документы
            </div>
            <div className={classes.bottom__botMenu__documents__frame253}>
              <div
                className={
                  classes.bottom__botMenu__documents__frame253__unnamed58
                }
              >
                Соглашение с пользователем
              </div>
              <div
                className={
                  classes.bottom__botMenu__documents__frame253__unnamed59
                }
              >
                Правила оказания услуг
              </div>
              <div
                className={
                  classes.bottom__botMenu__documents__frame253__unnamed60
                }
              >
                Политика конфиденциальности
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
