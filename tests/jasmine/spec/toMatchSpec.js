describe('Teste do toMatch', function() {
    it('deve validar o uso do toMatch', function() {
        var texto = 'teste com jasmine';

        expect(texto).toMatch('jasmine');
        expect(texto).toMatch(/jasmine/);
    });
});