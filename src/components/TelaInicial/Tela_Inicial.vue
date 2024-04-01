<template>
   
    <Menu style=""/>
  
    <div id="tamplate">

      <video autoplay muted loop id="video-background">
        <source src="../../assets/img/background.mp4" type="video/mp4">
      </video>
      
      <div class="conteudo-template">
        
        <img class="profile" src="../../assets/img/profile.png" />

        <h1 class="h1_Sauda_Nome">Olá, me chamo Marco Antonio!!!</h1>


        <div class="Area_Frase">

            <h4 class="h3_Intro">"Sou Desenvolvedor Full-Stack apaixonado por criatividade e buscando estar em 
            constante evolução, sempre criando soluções inovadoras e que atendam as necessidades das pessoas"</h4>
    
            <!-- <img  class="icon_top" src="../../assets/img/chevron-down-icon.png" /> -->

        </div>
         
      </div> 
     
    </div>
    <!-- Div que eu quero mudar -->
   
    <div id="Info_Ocu">

      <h1 class="h1_ocupacao">Minha experiência</h1>
        
      <div class="Info_Ocu_Conteudo">
        
          <img class="icon_ocu"  src="../../assets/img/icon_work.png" />
          <h3 class="h3_cargo">Desenvolvedor<br>Front-End</h3>
          <h3 class="h3_nome_empresa">Empresa: T.I Gestor Software</h3>
          <h3 class="h3_nome_empresa">(ago.2022 - dez.2023)</h3>
          <p class="atividades">Principais atividades: Desenvolvimento e manutenção de aplicações web, utilizando os mais avançados frameworks e tecnologias</p>

          <br><ul>
            Principais Ferramentas:
            <li>Vue.js</li>
            <li>Vuetify</li>
            <li>React.js</li>
            <li>NodeJS</li>
            <li>Axios</li>
            <li>Sass</li>
            <li>REST API</li>
            <li>Virtual Box</li>
            <li>Sistemas Operacionais Linux</li>
          </ul>
      </div>
    
        <a  target="_blank" href="https://www.linkedin.com/in/marco-antonio-caldeira-97548616a/">
          <button class="btn_ver_linkedin" href="https://www.linkedin.com/in/marco-antonio-caldeira-97548616a/"  style="margin-top: 100px;">Ver meu Linkedin</button>
        </a>
             
    </div>  

    <div id="Area_Projetos">

      <h1 class="h1_servicos">Alguns projetos desenvolvidos</h1>

        <a  target="_blank" href="https://github.com/MarcoantonioCaldeira/Sistema-de-Cadastro-de-Clientes-e-Vendas">
          <ProjetoContainer titulo="Sistema de Cadastro de Clientes e Vendas"  descricao="Sistema de Cadastro de Vendas e Clientes desenvolvido para a Empresa T.I Gestor." :tecnologias="['Vue.js', 'RestAPI', 'Axios', 'SASS']"   />
        </a>
        <a  target="_blank" href="https://github.com/MarcoantonioCaldeira/TrackingHub-App">
          <ProjetoContainer titulo="Traking-Hub-App"  descricao="Aplicativo para rastreio de Entregas com Sistema de Login e atualização de Status de produtos."  :tecnologias="['ReactJS', 'TypeScript', 'RestAPI' , 'NestJS', 'Docker']"  :hrefProp="href_1"/>
        </a> 
        <a  target="_blank" href="https://github.com/MarcoantonioCaldeira/Hungry-Hub-App-New">
          <ProjetoContainer titulo="Hungry-Hub-App"  descricao="Aplicativo para entrega de alimentos via Delivery onde o usuario pode se cadastrar, fazer login  e concluir o pedido" :tecnologias="['React', 'React-Router', 'Sass', 'Styled-Components']"    :hrefProp="href_1"/>
        </a>
        <a target="_blank" href="https://github.com/MarcoantonioCaldeira/Anotation-App">
          <ProjetoContainer titulo="Anotation-App"  descricao="Aplicativo para criar, atualizar e deletar anotações da aplicação" :tecnologias="['VueJS', 'Sass', 'Axios', 'RestAPI', 'NestJS' , 'Docker']"  :hrefProp="href_1"/>
        </a>
        <a target="_blank" href="https://github.com/MarcoantonioCaldeira/Sistema-para-Hamburgueria">
          <ProjetoContainer titulo="Sistema-para-Hamburgueria"  descricao="Sistema para criar, atualizar status e deletar pedidos de uma Hamburgueria"  :tecnologias="['VueJS', 'Sass', 'Axios', 'Firebase']"  :hrefProp="href_1"/>
        </a>
            


     

      <a href="https://github.com/MarcoantonioCaldeira"><button class="btn_ver_completo"  style="margin-top: 70px;">Ver meu Github Completo</button></a>

    </div>

   

    <div id="Skills" @mousemove="updateMousePosition">


        <h1 class="h1_skills">Tecnologias que utilizo</h1>  
          
          <h4 class="h4_Intro">"Acredito que cada necessidade demanda um tipo de tecnologia específica.<br> 
          Por isso, busquei aprimorar meus conhecimentos nas principais Skills da atualidade."</h4>
      

        <div v-show="!mobile">
          <img src="../../assets/img/background_laguages.png" class="img_background" />
        </div>

        <div v-show="mobile">
          <img src="../../assets/img/background_laguages_mobile.png" class="img_background"/>
        </div>


        
    </div>

    <div id="Educacao">

      <h1 style=" color: #dad8d8;">Formação Acadêmica</h1> 

   
      <div class="Info_Educacao">

        <div class="Info_Ocu_Educacao">
          <h3 class="h3_nome_curso">Tecnologo em Sistemas para a Internet</h3>
          <h3 class="h3_nome_escola">Escola: IFSP - Campus Birigui (2022 - 2024)</h3>
          <h3 class="h3_nome_escola ">Nivel: Superior</h3>

          
          <br><ul>
            Habilidades adquiridas:
            <li>Algoritmos Avançados</li>
            <li>Estrutura de Dados</li>
            <li>Arquitetura de Computadores</li>
            <li>Redes de Computadores</li>
            <li>Conceitos de Engenharia de Software</li>
            <li>POO</li>
            <li>MVC</li>
            <li>Aplicações Web utilizando ReactJS e SpringBoot</li>
          </ul>
        </div>


        <div class="Info_Ocu_Educacao">
          <h3 class="h3_nome_curso">Técnico em Informática</h3>
          <h3 class="h3_nome_escola">Escola: IFSP - Campus Birigui (2016 - 2018)</h3>
          <h3 class="h3_nome_escola ">Nivel: Tecnico</h3>
          <br><ul>
            Habilidades adquiridas:
            <li>Algoritmos e Programação</li>
            <li>Informática Basica(Pacote Office)</li>
            <li>Desenvolvimento Web(HTML, CSS, Java Script e PHP)</li>
            <li>Web Designer</li>
            <li>Manutenção de Computadores</li>
          </ul>
        </div>


      </div>

   
    </div>

    <div id="Contato">

      

      <div id="area_inputs">
        <Contato />
      </div>

    </div>


    <Footer />
</template>

<script>
  import Menu from '../Menu/Menu.vue'
  import Footer from '../Footer/Footer.vue'
  import Contato from '../Contato/Contato.vue'
  import ProjetoContainer from '../ProjetoContainer/ProjetoContainer.vue'
  import '@fortawesome/fontawesome-free/css/all.css'


  export default {
    name: 'Tela_Inicial',
    components:{
      Footer,
      Contato,
      Menu,
      ProjetoContainer
    },

    data(){
      return{ 
        mobile: null,
        mouseX: 0,
        href_1: "https://github.com/MarcoantonioCaldeira/Sistema-de-cadastro-TI-Gestor",
        href_2: "https://github.com/MarcoantonioCaldeira/Sistema-de-comentarios",
        href_3: "https://github.com/MarcoantonioCaldeira/API-Consulta-de-Usuarios",
        mensagem:{
          msg_site:'',
          msg_loja:'',
          msg_sistema: '',
          hoveredItem: null,
          msg_prototipo: '',
        },
        links: [
            { id: 4, text: 'Saiba Mais', url: '#Contato' },
            //{ id: 5, text: '', url: '#tamplate' },
        ],
        exbir_detalhes:false,
        titulo:"",
        descricao: ""
      }
    },

    created(){
      this.checkScreen()
    },


    methods:{

        updateMousePosition(event) {
          this.mouseX = event.clientX;
        },

        topFunction(){

          var mybutton = document.getElementsByClassName(li)

          window.onscroll = function() {scrollFunction()};

          function scrollFunction() {
            
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              mybutton.style.display = "block";
            } else {
              mybutton.style.display = "none";
            }
          }

        },

        handleClick(link) {
          if (link.url === '#Contato') {
            // Rolar suavemente para a seção de Contato
            const contactSection = document.querySelector(link.url);
            if (contactSection) {
              window.scrollTo({
                top: contactSection.offsetTop,
                behavior: 'smooth'
              });
            }
          } else if (link.url === '#tamplate') {
            // Rolar suavemente para a seção de Tamplate
            const templateSection = document.querySelector(link.url);
            if (templateSection) {
              window.scrollTo({
                top: templateSection.offsetTop,
                behavior: 'smooth'
              });
            }
          } else {
            // Rolar suavemente para o topo da página
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }
        },


        Mostrar_Detalhes(){
          this.exbir_detalhes = true;
        },

        Fechar_Detalhes(){
          this.exbir_detalhes = false;
        },

        checkScreen() { 
          this.windowWidth = window.innerWidth;
          if(this.windowWidth <= 750){
            this.mobile = true;
            return;
          }
          this.mobile = false;
          return;
      },
      }
       
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./style.scss" lang="scss">
</style>
