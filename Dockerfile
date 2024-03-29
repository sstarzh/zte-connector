FROM ubuntu:22.04
RUN apt-get update && apt-get -y upgrade
RUN mkdir -p /opt/ericom
COPY ztedge-client ztedge-client.js utils.js package.json package-lock.json ericomshield.crt ericomshield-new.crt /opt/ericom/
RUN chmod +x /opt/ericom/ztedge-client
RUN apt-get update && apt-get install -y dpkg wireguard wireguard-go at curl libc-dev iproute2 iptables openssl net-tools vim
RUN update-alternatives --set iptables /usr/sbin/iptables-legacy
RUN ln -s /opt/ericom/ztedge-client /usr/local/bin/ztedge-client
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash
RUN apt-get install -y nodejs
RUN cd /opt/ericom && npm install
COPY wg-quick /usr/bin/wg-quick 
RUN chmod +x /usr/bin/wg-quick
COPY ./entrypoint.sh /
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["myTenant", "newConnector", "authKey", "apiKey", "tenantId"]
EXPOSE 51821
EXPOSE 51820/udp