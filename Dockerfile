FROM node:14.15.0-buster AS builder

RUN mkdir /bedrock

WORKDIR /bedrock

RUN npm install 'git+https://github.com/thusc/bedrock.git#cli'

ENV PATH=/bedrock/node_modules/.bin:$PATH

# Build the static site to dist/.
ADD . .
RUN bedrock build


FROM nginx:1.14.2-alpine

# Remove the default Nginx content.
RUN rm -rf /usr/share/nginx/html/*

# Copy the artifacts from the `builder` step to the default Nginx public
# directory.
COPY --from=builder /bedrock/dist /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]

# The resulting image can be run with e.g.
#   docker run -p 5000:80 <image-name>
