FROM ubuntu:18.04 AS builder
WORKDIR /app
COPY package.json /app/package.json
RUN apt update && apt install -y hugo curl
COPY . /app
RUN cp ./bin/hugo.linux /usr/bin
RUN bash -c 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash'
RUN echo 'export NVM_DIR="$HOME/.nvm"' >> "$HOME/.bashrc"
RUN echo '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"' >> "$HOME/.bashrc"
RUN echo '[ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"' >> "$HOME/.bashrc"
RUN bash -c 'source $HOME/.nvm/nvm.sh   && \
             nvm install v11.15 && nvm use v11.15 && \
             npm install && npm run build'
FROM nginx:stable
COPY --from=builder /app/dist /var/www
COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 3006

CMD ["nginx", "-g", "daemon off;"]