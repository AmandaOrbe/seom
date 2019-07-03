activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Assumes the file source/about/template.html.erb exists

lista_cursos = ["biologiamolecular",
  "cabeza-y-cuello",
  "cancer-gastrointestinal",
  "tumores-genito-urinarios",
  "tumores-ginecologicos",
  "cancer-de-mama",
  "cancer-prostata",
  "cancer-de-pulmon",
  "cancer-de-tiroides",
  "tumores-snc",
  "consejo-genetico-en-cancer",
  "cuidados-continuos",
  "etv",
  "epidemiologia-y-prevencion",
  "estadisticas-oncologos",
  "farmacologia-clinica-oncologica",
  "habilidades-comunicativas",
  "inmunooncologia",
  "investigacion-clinica-en-oncologia",
  "linfomas-y-mieloma",
  "medicina-personalizada-precision",
  "melanoma",
  "sarcoma",
  "urgencias-en-oncologia",
  "tumores-de-origen-desconocido",
  "tumores-neuroendocrinos"]
lista_cursos.each do |curso|
  proxy "/#{curso}.html", "/show.html", :locals => { :curso => curso },  ignore: true
end

activate :sprockets

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
  set :relative_links, true
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
end


