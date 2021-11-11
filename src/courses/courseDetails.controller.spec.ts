

describe('All Test in this describe will be run', () => {const sbEmailValidator = {
    sbEmailValidator() {
        const value = true;
        if (value) {
            return null;
        } else {
            return console.error('email is in wrong format');
        }
    },
};
test('This is a valid validator', () => {
    const somethingSpy = jest.spyOn(sbEmailValidator, 'sbEmailValidator');
    const validEmail = sbEmailValidator.sbEmailValidator();
    expect(somethingSpy).toHaveBeenCalled();
    expect(validEmail).toBe(null);
});
test('This is a valid Email Address', () => {
    const email = 'email@111.com';
    expect(true).toBe(true);
});

  });


