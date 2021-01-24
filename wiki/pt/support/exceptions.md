---
sidebar: auto
---

# Exceptions
Uma explicação rápida sobre exception errors que geralmente ocorrem quando estiver instalando mods ao jogo.  
Explicações numeradas significa que pode ser um dos problemas listados.

## ArgumentException
Caminho é uma zero-length string, contém apenas espaço branco, ou contém um ou mais caracteres inválidos conforme definido por `InvalidPathChars`.

## ArgumentNullException
O caminho é nulo.

## DirectoryNotFoundException
O caminho indicado é invalido.
> Exemplo: Está em uma unidade não mapeada.

## IOException
1. O arquivo especificado está em uso.
2. Há um identificador aberto no arquivo, e o sistema operacional é Windows XP ou anterior. Este identificador aberto pode resultar na enumeração de diretórios e arquivos.

## NotSupportedException
O caminho está em um formato inválido.

## PathTooLongException
O caminho especificado, nome do arquivo, ou ambos excedem o comprimento máximo definido pelo sistema.

## UnauthorizedAccessException
1. O utilizador de chamadas não tem a permissão necessária.  
   Isso pode significar que um programa também está bloqueando o usuário de acessar o arquivo, como `Antivirus, programas que bloqueiam programas/processos/atividades suspeitos` Outras causas seriam aqueles que não teriam direitos parecidos com os **que faltassem direitos de administrador e os direitos.** (ou seja, seu usuário ou pc não tem direitos suficientes para acessar/escrever arquivos e dados de qualquer forma.
2. O arquivo é um arquivo executável que está em uso.
3. O caminho é um diretório.
4. O caminho especificado é um arquivo somente para leitura.

