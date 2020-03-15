export class Modelo_Proyectos{
  constructor(public titulo:string, public tipo:string, public descripcion:string, public plazo:number, public metas:any,public img:string)
  	{};
  
  rellena = function(titulo, tipo, descripcion, plazo, metas, img){
    this.Titulo = titulo; 
    this.Tipo = tipo; 
    this.Descripcion = descripcion; 
    this.Plazo = plazo; 
    this.ejemplos = metas; 
    this.Img = img; 
  };

  rellenabj = function(obj:any){
    this.Titulo = obj.Titulo; 
    this.Tipo = obj.Tipo; 
    this.Descripcion = obj.Descripcion; 
    this.Plazo = obj.Plazo; 
    this.ejemplos = obj.ejemplos; 
    //this.img = obj.img; 
  };
}
//export class Listas {constructor(public id:number,public nombre:string,public foto:string){}}
export class Exclusivos{
	public Titulo:string = 'Productos Exclusivos';
    public Tipo:string = 'Independiente, En desarrollo y para terceros.';
	public Descripcion:string = 'Muchas veces nos encontramos con aplicativos que de forma generica y sin ningun contacto con nuestro negocio, nuestros intereses y nuestras necesidades dicen estar desarrollados para cubrir las falencias de productividad o sustentabilidad que buscamos. Lo cierto es que la tecnologia, es la aplicacion concreta de determinados conocimientos inutiles a las distintas circunstancias que nos limitan, permitiendo asi una verdadera expansion de nuestros horizontes. Es por eso que el sostenimiento de tecnologias de desarrollo sustentable totalmente personalizadas pueden acoplarse a su empresa o negocio de una manera mas armoniosa y con curvas de aprendizaje medidas y adaptadas para usted y los suyos. No adapte su vida a la tecnologia, adapte la tecnologia a sus necesidades, no es necesario ganar un problema para avanzar. Es por eso que ofrezco el servicio de desarrollo personalizado y exclusivo, no solo para que pueda contar con un diseño a su medida, sino ademas con sistemas en los que usted pueda aplicar los años de experiencia en su negocio, al desarrollo de soluciones que faciliten las tareas mecanizadas, los trabajos repetitivos y mas agotadores.';
	public Plazo:number = 0;
	public ejemplos = ['Control de personal atraves de huella dactilar, realizado a Medida','Seguimiento de rutinas de produccion o entrega','Desarrollo de sistemas que le permitan sobrepasar problemas y caracteristicas propias de su ambiente, y no desarrollos genericos complejos de utilizar, aprender e integrar a su rutina.']
}

export class App{
	public Titulo:string = 'App Manager';
    public Tipo:string = 'Independiente, En desarrollo, para terceros.';
	public Descripcion:string = 'Creacion de aplicativos para fidelizacion y comercializacion integral via movil, con campaña de integracion de nuevas tecnologias.';
	public Plazo:number = 0;
	public ejemplos = ['Haga de su app una utilidad nueva en la vida de sus clientes.'];
}

export class Marketing{
	public Titulo:string = 'Marketing Digital'; 
	public Tipo:string = 'Sobre escala Presupuestaria';
	public Descripcion:string = 'El mundo digital es un universo de una bastedad que podriamos entender como una extension de nuestra realidad inmediata. Como destacar o conseguir fidelidad de clientes en un mercado tan diverso y amplio es una cuestion crucial. Ademas la continua novedad que interpela a quienes desenbarcan en este nuevo universo hace que los productos o servicios expuestos de manera convencional en la red, pasen a ser percibidos como formas antiguas, viejas o poco rentables de las cosas. Lo que ofrecemos es un servicio de actualizacion y creacion de campañas online, con sistemas de CEO, para poder llevar su producto de maneras mas intimas y productivas en el mundo digital, a nuevos y antiguos clientes.';
	public Plazo:number = 0; 
	public ejemplos = ['Penetracion en nuevos publicos para su marca o producto','Injerencia en campañas de redes sociales','Generacion de campañas de fidelacion de clientes y sistemas de cupones por uso','Integracion, capacitacion y manejo en campañas de google adwords y redes sociales','Acercamiento y creacion de perfiles de clientes y campañas de calidad constantes']
}

export class Ubers{
	public Titulo:string = 'Envios and Uber\' s'; 
	public Tipo:string = 'Sobre escala Presupuestaria, en Desarrollo e implementacion';
	public Descripcion:string =  'Sistema de control, armado y entrega de pedidos, totalmente personalizado y con soporte durante 12 meses. E&U cuenta con modulos de registro de pedidos y clientes y un modulo util para empresas de transporte de productos o personas que permite el seguimiento de los productos por parte del cliente y del administrador y su ubicacion en un mapa. Integrado a varias tecnologias GPS, Waze, GoogleMaps o Langer';
	public Plazo:number = 35; 
	public ejemplos = ['Penetracion en nuevos publicos para su marca o producto','Comercializacion para campañas en redes sociales','Economizacion de los recursos en los mecanismos de comercializacion','Capacidad de cobros extra por envios y sucursabilidad','Acercamiento y creacion de perfiles de clientes y campañas de calidad constantes']
}

export class Ecommerce{
	public Titulo:string = 'Ecommerce - Comercio Digital'; 
	public Tipo:string = 'Solucion Implemetada';
	public Descripcion:string = 'La llegada del mundo digital a nuestra vida cotidiana nos interpela con nuevos desafios en materia laboral, social y economica. Asi como la antigua despensa al enfrentar el desafio de las grandes cadenas, muto al auge de autoservicios, los antiguos comercios de visita y gondolas reales, poco a poco van irrumpiendo al mercado digital latinoamericano. En 2018 segun cifras oficiales, el mercado digital latinoamericano, triplico su volumen total de ventas y va camino a duplicarse otra vez en los proximos años(https://www.bbva.com/es/commerce-triplica-ventas-america-latina/). Ademas posee un universo de 640 millones de personas en la region lo que no solo le permitiria vender mas, sino comercializar a otras cantidades y lugares (http://content.blacksip.com/crecimiento-ecommerce-latinoamerica). Por ello ofrecemos un paquete de Ecommerce sustentable para su empresa, que cuenta como todas nuestras soluciones de personalizacion total, garantia de funcionamiento por 12 meses, integracion a soluciones de envios y cobro populares, como tambien con nuevas caracteristicas y diferentes planes de comercializacion. Si desea una presencia online para su negocio, que sea efectiva, con la que pueda evaluar paulatinamente su progreso y pueda solventar la expansion de su frontera de clientes, puede servirle este paquete de trabajo.';
	public Plazo:number = 45; 
	public ejemplos = [
	'Poner en marcha nuevos Proyectos, con un coste mucho mas bajo que el alquiler, reparacion y acondicionamiento de un lugar fisico',
	'Integrar a apps de descuento su negocio actual',
	'Generar campañas de fidelacion de clientes',
	'Brindar nuevos servicios con respecto al resto, como armado de pedidos y control de compras y precios'
	]
}


export class Stock{
	public Titulo:string = 'Inventario al Cien'; 
	public Tipo:string = 'Solucion Implemetada';
	public Descripcion:string = 'Sistema de control, armado y venta de productos totalmente personalizado y con soporte durante 12 meses. Inventario al Cien, cuenta con modulos de registro de pedidos y clientes y un modulo util para la integracion a plataformas de ecommerce, como manejo de sucursales.';
	public Plazo:number = 35; 
	public ejemplos = [
		'Solucion de trabajo totalmente personalizable y de facil aprendizaje y utilizacion',
		'Integracion comercial al mundo digital',
		'Efectividad y multitarea de un panel personalizado',
		'Integracion a control de sucursales',
		'Seguimiento constante de su negocio via web',
		'Acercamiento y creacion de perfiles de clientes y campañas de calidad constantes'
	]
}

export class Turnos{
	public Titulo:string = 'El Turnero'; 
	public Tipo:string = 'Solucion Implemetada';
	public Descripcion:string = 'Sistema de control, armado y venta de agendas para productos, servicios y citas.';
	public Plazo:number = 35; 
	public ejemplos = [
		'Solucion de trabajo totalmente personalizable y de facil aprendizaje y utilizacion',
		'Integracion comercial al mundo digital',
		'Efectividad y multitarea de un panel personalizado',
		'Integracion a control de sucursales',
		'Marcaje de metas y agendas virtuales',
		'Acercamiento y creacion de perfiles de clientes y campañas de calidad constantes',
		'Optimizacion de tiempo laboral'
	]
}
