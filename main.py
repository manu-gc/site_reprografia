from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template('login.html')


@app.route('/professor')
def professor():
    return render_template('professor.html')

@app.route('/coordenador')
def coordenador():
    return render_template('coordenador.html')


@app.route('/catalogo')
def catalogo():
    return render_template('catalogo.html')

@app.route('/acompanhamento')
def acompanhamento():
    return render_template('acompanhamento.html') 

@app.route('/configuracao')
def configuracao():
    return render_template('configuracao.html')

@app.route('/reprografia')
def reprografia():
    return render_template('reprografia.html')

@app.route('/solicitar')
def solicitar():
    return render_template('solicitar.html')

if __name__ == '__main__':
    app.run(debug=True)