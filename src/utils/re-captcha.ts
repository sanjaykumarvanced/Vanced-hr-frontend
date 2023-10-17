import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useCallback, useEffect } from 'react';

export const useReCaptcha = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      return;
    }

    await executeRecaptcha('yourAction');
  }, [executeRecaptcha]);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);
};
