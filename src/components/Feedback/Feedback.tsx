import React, { KeyboardEvent, SyntheticEvent, useRef } from 'react';
import useForm from '../../utils/hooks/useForm';
import Input from '../Inputs/Input/Input';
import TextArea from '../Inputs/TextArea/TextArea';
import Line from '../Line/Line';
import FeedbackLine from '../../images/feedback-line.svg?react';
import {
  INPUT_EMAIL_ATTRIBUTES,
  INPUT_NAME_ATTRIBUTES,
  InputNames,
} from './constants';
import { TDataFeedback } from '../../@types/types';
import { ENTER_KEY, SPACE_KEY } from '../../utils/constants';
import './Feedback.scss';
import { Trans, useTranslation } from 'react-i18next';

type PropTypes = {
  onSubmit: (dataForm: TDataFeedback) => void;
  isPreloaderEnabled: boolean;
  onPolicyClick: (event: SyntheticEvent) => void;
};

const Feedback: React.FC<PropTypes> = ({
  onSubmit,
  isPreloaderEnabled,
  onPolicyClick,
}) => {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const form = useForm(formRef);
  const preloader = isPreloaderEnabled && (
    <span className="feedback__form__preloader">{t('feedback.preloader')}</span>
  );
  const handleSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault();

    const dataForm: TDataFeedback = {
      policy: false,
      userEmail: '',
      userMessage: '',
      userName: '',
      userPhone: '',
      ...form.values,
      ...form.checkboxValues,
    };

    onSubmit(dataForm);
    form.resetForm();
  };

  const handlePolicyKeydown = (event: KeyboardEvent) => {
    if (![SPACE_KEY, ENTER_KEY].includes(event.key)) {
      return;
    }
    event.preventDefault();
    onPolicyClick(event);
  };

  return (
    <section id="feedback" className="section feedback">
      <div className="section__wrapper feedback__wrapper">
        <Line lineSVG={FeedbackLine} classLineSVG="feedback__line" />
        <h2 className="section__title">{t('feedback.title')}</h2>
        <h3 className="section__subtitle feedback__subtitle">
          {t('feedback.subtitle')}
        </h3>
        <p className="feedback__description">{t('feedback.text')}</p>
        <form
          noValidate
          ref={formRef}
          className="feedback__form"
          onSubmit={handleSubmit}
        >
          <Input
            name={InputNames.USER_NAME}
            value={form.values[InputNames.USER_NAME] || ''}
            placeholderText={t('feedback.inputs.name')}
            typeInput="text"
            errors={form.errors}
            validateAttributes={INPUT_NAME_ATTRIBUTES}
            onChange={form.handleChange}
          />
          <Input
            name={InputNames.USER_EMAIL}
            value={form.values[InputNames.USER_EMAIL] || ''}
            placeholderText={t('feedback.inputs.email')}
            typeInput="email"
            errors={form.errors}
            validateAttributes={INPUT_EMAIL_ATTRIBUTES}
            onChange={form.handleChange}
          />
          <TextArea
            name={InputNames.USER_MESSAGE}
            value={form.values[InputNames.USER_MESSAGE] || ''}
            placeholderText={t('feedback.inputs.message')}
            errors={form.errors}
            onChange={form.handleChange}
          />
          <label
            htmlFor={InputNames.POLICY}
            className="feedback__form__checkbox"
          >
            <input
              id={InputNames.POLICY}
              name={InputNames.POLICY}
              checked={form.checkboxValues[InputNames.POLICY] || false}
              type="checkbox"
              className="feedback__form__checkbox-input"
              onChange={form.handleChange}
              required
            />
            <span className="feedback__form__checkbox-text">
              <Trans i18nKey="feedback.inputs.policy">
                Нажимая на кнопку, вы даете согласие на обработку{' '}
                <span
                  onClick={onPolicyClick}
                  onKeyDown={handlePolicyKeydown}
                  tabIndex={0}
                  role="button"
                  className="feedback__form__checkbox-policy"
                >
                  персональных данных.
                </span>
              </Trans>
            </span>
          </label>
          {preloader}
          {!isPreloaderEnabled && (
            <button
              className="button feedback__form__button-submit"
              type="submit"
              disabled={!form.isValid}
            >
              {t('feedback.inputs.submit')}
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default Feedback;
