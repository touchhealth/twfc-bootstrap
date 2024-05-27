    
    const head = document.getElementsByTagName('head')[0];
    const bootstrapCss = document.createElement('link');

    bootstrapCss.setAttribute('type', 'text/css');
    bootstrapCss.setAttribute('rel', 'stylesheet');
    bootstrapCss.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
    bootstrapCss.setAttribute('integrity', 'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH');
    bootstrapCss.setAttribute('crossorigin', 'anonymous');

    const target = document.querySelector('[ttype=borderlayout] .regionCenter');

    const bootstrapDiv = document.createElement('div');
    bootstrapDiv.setAttribute('id', 'bootstrap-root-div');
    bootstrapDiv.setAttribute('style', 'margin-top: 400px;');
    target.appendChild(bootstrapDiv)

    const bootstrapDivContent = document.createElement('div');
    bootstrapDivContent.innerHTML = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
    </div>
    </div>

    <div class="card text-center">
    <div class="card-header">
        Featured
    </div>
    <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer text-body-secondary">
        2 days ago
    </div>
    </div>

    <div class="card w-75 mb-3">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Button</a>
    </div>
    </div>
    `

    const style = document.createElement('style');
    style.innerHTML = `
    :host {
        --my-var: red;
    }
    `

    var targetContent = bootstrapDiv
    var targetStyle = head

    // targetContent = bootstrapDiv.attachShadow({ mode: "open" });
    // targetStyle = targetContent;

    targetStyle.appendChild(style)
    targetStyle.appendChild(bootstrapCss)
    targetContent.appendChild(bootstrapDivContent)

    /////////////////////////////////////////
