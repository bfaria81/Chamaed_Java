function controleDeRotas(url){
    switch(url){
        case "/logout":
            gerarSwal(url);
            break;
        case "/showUsuarioAtivo":
//            Renderizar Tela
//            $.get(url, function(data){
//            //Renderizar Tela
//            $('#mainContainer').html(data);
//            Definir as ações dos componentes
//            $("#enviar").click(enviaCadastroNotebook);
            window.location.href = "/showUsuarioAtivo"

            break;
        case "/showInterruptor":
            window.location.href = "/showInterruptor"
            break;

        case "/chamados":
                    window.location.href = "/chamados"
                    break;

        case "/relatorio":
                    window.location.href = "/relatorio"
                    break;

    }
}



