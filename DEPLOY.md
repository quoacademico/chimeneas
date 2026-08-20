# 🚀 Guía de Deploy - Proyecto Angular

## Opciones de Deploy

### 1. Deploy Automático con Script (Recomendado)

#### Para Desarrollo:
```powershell
cd website
.\deploy.ps1 dev
```

#### Para Producción:
```powershell
cd website
.\deploy.ps1 prod
```

### 2. Deploy Manual

#### Compilar para Desarrollo:
```powershell
cd website
npm run build:dev
```

#### Compilar para Producción:
```powershell
cd website
npm run build:prod
```

#### Copiar archivos manualmente:
Los archivos compilados se encuentran en `website/dist/inteshape/`

### 3. Deploy con npm scripts

```powershell
# Deploy completo a desarrollo
npm run deploy:dev

# Deploy completo a producción  
npm run deploy:prod
```

## 📁 Estructura de Deploy

```
deploy/
├── dev/          # Archivos para desarrollo
└── prod/         # Archivos para producción
```

## 🌐 Opciones de Hosting

### A. Servidor Web Local (Pruebas)
```powershell
# Instalar servidor HTTP simple
npm install -g http-server

# Servir archivos de desarrollo
http-server deploy/dev -p 8080

# Servir archivos de producción
http-server deploy/prod -p 8080
```

### B. Apache/Nginx
1. Copia los archivos de `deploy/prod/` al directorio web de tu servidor
2. Asegúrate de que el archivo `.htaccess` esté incluido (para Apache)
3. Para Nginx, configura las rutas para Angular routing

### C. Hosting en la Nube

#### Netlify:
1. Conecta tu repositorio Git
2. Build command: `npm run build:prod`
3. Publish directory: `dist/inteshape`

#### Vercel:
1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta: `vercel --prod`

#### Firebase Hosting:
1. Instala Firebase CLI: `npm install -g firebase-tools`
2. Configura: `firebase init hosting`
3. Deploy: `firebase deploy`

#### GitHub Pages:
1. Instala angular-cli-ghpages: `npm install -g angular-cli-ghpages`
2. Build: `npm run build:prod`
3. Deploy: `npx angular-cli-ghpages --dir=dist/inteshape`

## ⚙️ Configuración de Entornos

### Variables de Entorno

**Desarrollo** (`environment.ts`):
- `production: false`
- `apiUrl: 'http://localhost:3000/api'`
- `enableLogging: true`

**Producción** (`environment.prod.ts`):
- `production: true`
- `apiUrl: 'https://tu-api-produccion.com/api'`
- `enableLogging: false`

Recuerda actualizar estas URLs con las de tu proyecto real.

## 🔧 Troubleshooting

### Error: Cannot find module
```powershell
rm -rf node_modules package-lock.json
npm install
```

### Error de routing en producción
Asegúrate de que el archivo `.htaccess` esté en el directorio raíz del servidor web.

### Bundle muy grande
- Usa `ng build --prod --source-map=false` para reducir tamaño
- Considera lazy loading para módulos grandes
- Analiza el bundle con `npm install -g webpack-bundle-analyzer`

## 📊 Análisis del Bundle

```powershell
# Generar estadísticas
ng build --prod --stats-json

# Analizar con webpack-bundle-analyzer
npx webpack-bundle-analyzer dist/inteshape/stats.json
```

## 🔒 Consideraciones de Seguridad

1. **No incluyas claves secretas** en el código frontend
2. **Configura CORS** correctamente en tu API
3. **Usa HTTPS** en producción
4. **Valida todas las entradas** del usuario
5. **Mantén las dependencias actualizadas**
